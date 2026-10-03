# Labthrift

Static editorial site for a one-person home lab.

**Live:** https://labthrift.com

## Niches
1. 2.5G closet switches
2. N100/N150 mini PCs for Proxmox
3. Used enterprise vs new
4. First NAS / backup box
5. Cheap PoE + APs

## Next admin (human)
1. Register labthrift.com
2. Amazon Associates + one other network
3. AdSense later
4. Point a host (Cloudflare Pages, Netlify, or any static host) at this folder

## Checks

```sh
npm ci
npm test                 # Worker contract tests (W01–W03), no network needed
npm run dev              # local Worker + assets on http://127.0.0.1:8787
npm run check            # request matrix against the local Worker
npm run check -- https://labthrift.com   # same matrix, read-only, against live
```

`npm test` covers Markdown negotiation, HEAD lengths, 404s, blocked routes, discovery headers, publishing exclusions and the aggregate metrics contract. `npm run check` exercises the real asset pipeline: it confirms every private path returns 404 and every sitemap page resolves. Run the local migration first if you want metric rows locally: `npx wrangler d1 migrations apply labthrift-metrics --local`.

## Design documentation

[Product, requirements and architecture documents](docs/design/README.md) cover the frontend, supporting backend and the Runs-to-ByteRush consolidation. Release evidence is tracked separately from design intent.

[Universal completion roadmap](https://github.com/zemdregon/tech-dose/blob/main/docs/ROADMAP.md) sequences work across all three products, with dependencies, acceptance criteria, and coverage of all 100 numbered requirements.
