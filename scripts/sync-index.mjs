#!/usr/bin/env node
// Keep the guide index in step with the guide pages.
//
//   npm run sync-index              # rewrite stale counts and md/guides/index.md
//   npm run sync-index -- --check   # exit 1 if anything is stale (run by npm test)
//
// A note is a guide page: guides/<slug>.html, excluding the index and the
// _index-* partials. guides/index.html is the source of truth for which notes
// are listed under which topic; this script derives every stated count from
// the pages and the index, and rebuilds the Markdown mirror of the index.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
const text = (html) => decode(html.replace(/<[^>]+>/g, "")).trim();

export async function countNotes(root = ROOT) {
  const files = await readdir(path.join(root, "guides"));
  return files.filter((f) => f.endsWith(".html") && f !== "index.html" && !f.startsWith("_")).length;
}

/** Topics in index order: id, name, lead paragraphs, note lists, unique internal note count. */
export function parseIndex(html) {
  const main = html.slice(html.indexOf('<h2 id="'), html.indexOf("</main>"));
  const topics = [];
  const re = /<h2 id="([^"]+)">(.*?)<\/h2>|<p(?: class="[^"]*")?>(.*?)<\/p>|<div class="note-list">([\s\S]*?)<\/div>/g;
  for (const m of main.matchAll(re)) {
    if (m[1]) topics.push({ id: m[1], name: text(m[2]), blocks: [], slugs: new Set() });
    else if (m[3] != null) topics.at(-1).blocks.push({ p: text(m[3]) });
    else {
      const rows = [...m[4].matchAll(/<a class="note-row" href="([^"]+)"><span class="t">(.*?)<\/span><span class="d">(.*?)<\/span><\/a>/g)].map(
        ([, href, t, d]) => ({ href, t: text(t), d: text(d) })
      );
      topics.at(-1).blocks.push({ rows });
      for (const r of rows) if (!/^https?:/.test(r.href)) topics.at(-1).slugs.add(r.href);
    }
  }
  return topics;
}

function markdownIndex(htmlIndex, topics, n) {
  const updated = htmlIndex.match(/<p class="note">([^<]*)<\/p>/)?.[1] ?? "";
  const deck = text(htmlIndex.match(/<p class="deck">(.*?)<\/p>/)[1]);
  const out = [
    "# All notes",
    "",
    "Source: https://labthrift.com/guides/",
    "Markdown: https://labthrift.com/md/guides/index.md",
    "",
    ...(updated ? [decode(updated), ""] : []),
    "# All notes",
    "",
    deck,
    "",
    "Topics",
    "",
    topics.map((t) => `${t.name} ${t.slugs.size}`).join(" "),
    "",
    `Find a note ${n} notes`,
    "",
  ];
  for (const t of topics) {
    out.push(`## ${t.name}`, "");
    for (const b of t.blocks) {
      if (b.p != null) out.push(b.p, "");
      else out.push(b.rows.map((r) => `[${r.t}${r.d}](<${r.href}>)`).join(" "), "");
    }
  }
  return out.join("\n");
}

export async function syncIndex({ check = false, root = ROOT } = {}) {
  const n = await countNotes(root);
  const stale = [];
  const files = {};
  const read = async (f) => (files[f] ??= await readFile(path.join(root, f), "utf8"));
  const fix = async (file, re, value) => {
    const s = await read(file);
    const m = s.match(re);
    if (!m) throw new Error(`${file}: nothing matches ${re}`);
    if (Number(m[1]) !== value) {
      stale.push(`${file}: ${m[1]} -> ${value}`);
      files[file] = s.replace(re, (whole, num) => whole.replace(num, String(value)));
    }
  };

  await fix("guides/index.html", /"numberOfItems": (\d+)/, n);
  await fix("guides/index.html", /<p class="deck">(\d+) notes, grouped by topic/, n);
  await fix("guides/index.html", /id="note-count"[^>]*>(\d+) notes</, n);
  await fix("about.html", /All notes \((\d+)\)/, n);
  await fix("about.html", /<p>(\d+) notes across topics/, n);
  await fix("md/about.md", /All notes \((\d+)\)/, n);
  await fix("md/about.md", /\)(\d+) notes across topics/, n);

  const topics = parseIndex(await read("guides/index.html"));
  for (const t of topics) {
    await fix("guides/index.html", new RegExp(`<a href="#${t.id}">[^<]*<span class="n">(\\d+)</span>`), t.slugs.size);
  }
  const listed = new Set(topics.flatMap((t) => [...t.slugs]));
  if (listed.size !== n) stale.push(`guides/index.html lists ${listed.size} notes but there are ${n} guide pages`);

  const md = markdownIndex(await read("guides/index.html"), topics, n);
  const oldMd = await read("md/guides/index.md");
  const footer = oldMd.slice(oldMd.indexOf("\n---\n"));
  if (oldMd !== md + footer) {
    stale.push("md/guides/index.md does not match guides/index.html");
    files["md/guides/index.md"] = md + footer;
  }

  if (!check) for (const [f, s] of Object.entries(files)) await writeFile(path.join(root, f), s);
  return { n, stale };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes("--check");
  const { n, stale } = await syncIndex({ check });
  if (stale.length) {
    console.log(`${check ? "Stale" : "Updated"} (${n} notes):\n  ${stale.join("\n  ")}`);
    if (check) process.exit(1);
  } else {
    console.log(`Index and counts agree: ${n} notes.`);
  }
}
