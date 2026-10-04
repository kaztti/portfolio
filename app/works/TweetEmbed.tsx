"use client";

import { useEffect, useRef } from "react";

type Twttr = { widgets: { load: (element?: HTMLElement) => void } };

const widgetsSrc = "https://platform.twitter.com/widgets.js";

function loadWidgets(): Promise<Twttr | undefined> {
  const existing = (window as Window & { twttr?: Twttr }).twttr;
  if (existing?.widgets) return Promise.resolve(existing);

  return new Promise((resolve) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${widgetsSrc}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = widgetsSrc;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", () => resolve((window as Window & { twttr?: Twttr }).twttr));
    script.addEventListener("error", () => resolve(undefined));
  });
}

export function TweetEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadWidgets().then((twttr) => {
      if (!cancelled && ref.current) twttr?.widgets.load(ref.current);
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div ref={ref} className="work-tweet">
      <blockquote className="twitter-tweet" data-lang="ja" data-dnt="true">
        <a href={url}>X の投稿を読み込み中…</a>
      </blockquote>
    </div>
  );
}
