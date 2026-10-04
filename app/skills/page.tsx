"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, skillList, type Skill, type SkillCategory } from "./data";
import "./skills.css";

const maximumSkillLevel = 5;

function SkillBadge({ badge }: { badge: Skill["badge"] }) {
  const size = badge.text.length <= 3 ? "is-short" : badge.text.length <= 5 ? "is-medium" : "is-long";
  return (
    <span className={`skill-badge ${size}`} style={{ background: badge.background, color: badge.color }} aria-hidden="true">
      {badge.text}
    </span>
  );
}

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="skill-level" role="img" aria-label={`レベル ${level} / ${maximumSkillLevel}`}>
      {Array.from({ length: maximumSkillLevel }, (_, index) => (
        <span key={index} className={index < level ? "skill-level-cell is-filled" : "skill-level-cell"} />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(categories[0].id);
  const visibleSkills = skillList.filter(({ category }) => category === activeCategory);
  const [selectedId, setSelectedId] = useState(visibleSkills[0].id);
  const selected = visibleSkills.find(({ id }) => id === selectedId) ?? visibleSkills[0];
  const activeCategoryName = categories.find(({ id }) => id === activeCategory)?.name;

  return (
    <main className="mc-container skills-page">
      <h1 className="page-title">MY SKILLS</h1>

      <section className="skills-window" aria-label="スキル一覧">
        <div className="skills-tabs" role="tablist" aria-label="スキルカテゴリ">
          {categories.map(({ id, icon, name }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`skills-tab ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(id);
                  setSelectedId(skillList.find(({ category }) => category === id)?.id ?? "");
                }}
              >
                <span aria-hidden="true">{icon}</span>
                {name}
              </button>
            );
          })}
        </div>

        <div className="skills-panel" role="tabpanel" aria-label={activeCategoryName}>
          <div className="skills-inventory">
            <h2 className="skills-heading">{activeCategoryName}</h2>
            <ul className="skills-grid">
              {visibleSkills.map((skill) => (
                <li key={skill.id}>
                  <button
                    type="button"
                    className={`skill-slot ${skill.id === selected.id ? "is-selected" : ""}`}
                    aria-pressed={skill.id === selected.id}
                    aria-label={skill.name}
                    title={skill.name}
                    onClick={() => setSelectedId(skill.id)}
                    onMouseEnter={() => setSelectedId(skill.id)}
                  >
                    <SkillBadge badge={skill.badge} />
                  </button>
                </li>
              ))}
            </ul>
            {activeCategory === "minecraft" && (
              <Link href="/works" className="adv-link-button skills-works-link">
                作品一覧を見る →
              </Link>
            )}
          </div>

          <article className="skill-detail" aria-live="polite">
            <div className="skill-detail-header">
              <span className="skill-detail-icon">
                <SkillBadge badge={selected.badge} />
              </span>
              <h3 className={`skill-detail-name ${selected.level >= maximumSkillLevel ? "is-master" : ""}`}>
                {selected.name}
              </h3>
            </div>
            <dl className="skill-detail-meta">
              <div>
                <dt>レベル</dt>
                <dd>
                  <SkillLevel level={selected.level} />
                  <span className="skill-level-text">
                    {selected.level} / {maximumSkillLevel}
                  </span>
                </dd>
              </div>
              <div>
                <dt>経験</dt>
                <dd>{selected.experience}</dd>
              </div>
            </dl>
            {selected.description && <p className="skill-detail-desc">{selected.description}</p>}
          </article>
        </div>
      </section>

      <Link href="/" className="mc-button compact-button">
        タイトルに戻る
      </Link>
    </main>
  );
}
