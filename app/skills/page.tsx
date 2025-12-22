"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { categories, skillList, SkillCategory } from './data';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<SkillCategory>(categories[0].id);

  const filteredSkills = skillList.filter(skill => skill.category === activeTab);

  return (
    <main className="mc-container" style={{ gap: '2rem' }}>
      
      <h1 style={{ color: '#fff', textShadow: '3px 3px 0 #000', fontSize: '2rem' }}>
        MY SKILLS
      </h1>

      <div className="creative-wrapper">
        
        <div className="tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-button ${activeTab === cat.id ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="creative-main-area">
          
          <h2 className="inventory-title" style={{ borderBottom: '2px solid #888', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            {categories.find(c => c.id === activeTab)?.name} Skills
          </h2>
          
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="skill-slot">
                
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name} 
                  className="skill-icon"
                />

                <div className="skill-tooltip">
                  <span className="tooltip-title">{skill.name}</span>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '0.8rem', 
                    color: '#ddd',
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid #444',
                    paddingBottom: '0.3rem'
                  }}>
                    <span>Exp: <span style={{ color: '#fff' }}>{skill.experience}</span></span>
                    <span>
                      Lv: 
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ 
                          color: i < skill.level ? '#ffff55' : '#444', 
                          marginLeft: i === 0 ? '4px' : '0' 
                        }}>
                          ★
                        </span>
                      ))}
                    </span>
                  </div>

                  <span className="tooltip-desc">{skill.description}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      <Link href="/" className="mc-button" style={{ maxWidth: '200px' }}>
        タイトルに戻る
      </Link>

    </main>
  );
}