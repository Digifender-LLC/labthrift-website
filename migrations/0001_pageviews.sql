-- Aggregate path+day pageviews. Never store IP, UA, or cookies here.
CREATE TABLE IF NOT EXISTS pageview_daily (
  day TEXT NOT NULL,           -- YYYY-MM-DD UTC
  path TEXT NOT NULL,          -- normalized path bucket
  kind TEXT NOT NULL,          -- human | bot
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path, kind)
);

CREATE INDEX IF NOT EXISTS idx_pageview_day ON pageview_daily(day);
CREATE INDEX IF NOT EXISTS idx_pageview_kind ON pageview_daily(kind);
