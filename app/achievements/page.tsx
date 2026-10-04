import Link from "next/link";
import { achievementSections, type Achievement } from "./data";
import { Gallery } from "./Gallery";

type AchievementNodeProps = {
  achievement: Achievement;
};

function AchievementNode({ achievement }: AchievementNodeProps) {
  const { date, description, highlights, icon, images, links, role, tags, title, type } = achievement;

  return (
    <article className="adv-node">
      <div className={`adv-icon-frame type-${type}`} aria-hidden="true">
        {icon}
      </div>
      <div className="adv-content">
        <h3 className={`adv-title title-${type}`}>{title}</h3>

        {role && (
          <p className="adv-role">{role}</p>
        )}

        {highlights?.length ? (
          <ul className="adv-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        {tags?.length ? (
          <ul className="adv-tags" aria-label="担当業務">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}

        {description && <p className="adv-desc">{description}</p>}
        {images?.length ? <Gallery images={images} /> : null}

        {links?.length ? (
          <ul className="adv-links" aria-label="関連リンク">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="adv-link-button">
                  {label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {date && <time className="adv-date">期間: {date}</time>}
      </div>
    </article>
  );
}

export default function AchievementsPage() {
  return (
    <main className="mc-container achievements-page">
      <h1 className="page-title">ADVANCEMENTS</h1>

      <section className="adv-window" aria-label="実績一覧">
        <h2 className="adv-header">MY ACHIEVEMENTS</h2>
        <div className="adv-body">
          <div className="adv-columns">
            {achievementSections.map(({ id, items, title }) => (
              <section key={id} className="adv-section">
                <h2 className="adv-section-heading">{title}</h2>
                {items.length ? (
                  items.map((achievement) => <AchievementNode key={achievement.id} achievement={achievement} />)
                ) : (
                  <p className="adv-section-empty">今後、ここに追記します。</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Link href="/" className="mc-button compact-button achievements-back-button">
        タイトルに戻る
      </Link>
    </main>
  );
}
