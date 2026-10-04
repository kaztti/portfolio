"use client";

import { useEffect, useRef, useState } from "react";
import type { Work } from "./data";
import { TweetEmbed } from "./TweetEmbed";

function WorkCard({ work }: { work: Work }) {
  const { badge, date, description, links, tags, title, tweetUrl } = work;

  return (
    <li className="work-card">
      {tweetUrl ? (
        <>
          <TweetEmbed url={tweetUrl} />
          <a href={tweetUrl} target="_blank" rel="noopener noreferrer" className="work-tweet-link">
            X で投稿を見る ↗
          </a>
        </>
      ) : (
        <article className="work-body">
          <div className="work-header">
            {badge && (
              <span className="work-badge" style={{ background: badge.background, color: badge.color }} aria-hidden="true">
                {badge.text}
              </span>
            )}
            <h3 className="work-title">{title}</h3>
          </div>
          {description && <p className="work-desc">{description}</p>}
          {tags?.length ? (
            <ul className="work-tags" aria-label="使用技術">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          {links?.length ? (
            <ul className="work-links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="adv-link-button">
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {date && <p className="work-date">{date}</p>}
        </article>
      )}
    </li>
  );
}

export function WorksCarousel({ items, label }: { items: Work[]; label: string }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdges({
        atStart: track.scrollLeft <= 1,
        atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    track?.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="works-carousel">
      <div className="works-carousel-controls">
        <span className="works-count">{items.length}件</span>
        <button type="button" className="works-arrow" onClick={() => scroll(-1)} disabled={edges.atStart} aria-label={`${label}を前へ`}>
          ‹
        </button>
        <button type="button" className="works-arrow" onClick={() => scroll(1)} disabled={edges.atEnd} aria-label={`${label}を次へ`}>
          ›
        </button>
      </div>
      <ul ref={trackRef} className="works-track" aria-label={label}>
        {items.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </ul>
    </div>
  );
}
