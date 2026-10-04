import Link from "next/link";
import { PlayerHead } from "../_game/PlayerHead";
import "./profile.css";

const experienceLevel = 21;

const profileDetails = [
  { label: "職業", value: "大学生 / 建築学科 / KUNキッズ" },
  { label: "拠点", value: "日本（九州）" },
  { label: "特技", value: "プログラミング、デザイン、CAD" },
  { label: "座右の銘", value: "人間は考える葦である" },
];

const timelineEvents = [
  { date: "2022.12.04", period: "高校２年の冬", title: "らーす鯖の開発が始まる。", color: "green" },
  { date: "2024.04", period: "大学に入学", title: "プログラミングに興味を持ち始める。", color: "purple" },
  {
    date: "2024.11",
    period: "大学１年の冬",
    title: "50人クラフトのコマンド勢に憧れ、プラグインの勉強を始める。",
    color: "pink",
  },
  { date: "2025.05.05", period: "大学２年のゴールデンウイーク", title: "50人クラフトのメンバーシップに入る。", color: "blue" },
  { date: "2025.09", period: "大学２年の夏", title: "50人クラフトのコマンド勢採用に応募したが不採用となる。", color: "red" },
  { date: "2026.07.27", period: "大学３年の夏", title: "らーす鯖のモデレーターと開発メンバーを引退。", color: "green" },
] as const;

const socialLinks = [
  { href: "https://twitter.com/kaz_tti", label: "X (Twitter)" },
  { href: "https://github.com/kaztti", label: "GitHub" },
];

export default function ProfilePage() {
  return (
    <main className="mc-container profile-page">
      <h1 className="page-title">PLAYER PROFILE</h1>

      <div className="profile-card">
        <aside className="profile-player">
          <PlayerHead />
          <p className="profile-head-hint">ドラッグで回転 / クリックで叩く</p>
          <p className="profile-name">Kazutti</p>

          <div className="profile-level">
            <span className="profile-level-number">{experienceLevel}</span>
            <div
              className="profile-xp-bar"
              role="progressbar"
              aria-label={`Experience Level ${experienceLevel}`}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="profile-xp-fill" />
            </div>
            <p className="profile-level-label">Experience Level</p>
          </div>

          <ul className="profile-sns" aria-label="SNS">
            {socialLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="adv-link-button">
                  {label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="profile-main">
          <section className="profile-panel" aria-labelledby="profile-status-heading">
            <h2 id="profile-status-heading" className="profile-heading">
              ステータス
            </h2>
            <dl className="profile-stats">
              {profileDetails.map(({ label, value }) => (
                <div key={label} className="profile-stat">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="profile-panel" aria-labelledby="profile-history-heading">
            <h2 id="profile-history-heading" className="profile-heading">
              これまでの歩み
            </h2>
            <ol className="profile-timeline">
              {timelineEvents.map(({ date, period, title, color }) => (
                <li key={date} className={`profile-event dot-${color}`}>
                  <p className="profile-event-date">
                    <time>{date}</time>
                    <span>{period}</span>
                  </p>
                  <p className="profile-event-title">{title}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <Link href="/" className="mc-button compact-button">
        タイトルに戻る
      </Link>
    </main>
  );
}
