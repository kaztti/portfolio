import type { Metadata } from "next";
import Link from "next/link";
import { workSections } from "./data";
import { WorksCarousel } from "./WorksCarousel";
import "./works.css";

export const metadata: Metadata = {
  title: "作品一覧 | Kazutti Portfolio",
  description: "Kazutti のマイクラ開発の作品一覧。",
};

export default function WorksPage() {
  return (
    <main className="mc-container works-page">
      <header className="works-intro">
        <h1 className="page-title">WORKS</h1>
        <p className="works-lead">マイクラ開発の作品一覧です。公開可能なものを掲載しています ※順不同</p>
      </header>

      {workSections.filter(({ items }) => items.length).map(({ id, items, title }) => (
        <section key={id} className="works-section" aria-labelledby={`works-${id}`}>
          <div className="works-section-header">
            <h2 id={`works-${id}`} className="works-section-title">
              {title}
            </h2>
          </div>
          <WorksCarousel items={items} label={title} />
          {items.length > 3 && <p className="works-hint">左右ボタン・横スクロールで、ほかの作品をご覧いただけます。</p>}
        </section>
      ))}

      <Link href="/" className="mc-button compact-button">
        タイトルに戻る
      </Link>
    </main>
  );
}
