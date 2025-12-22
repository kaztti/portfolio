import Link from "next/link";
import { achievementList, AchievementType } from "./data";

export default function AchievementsPage() {
  return (
    <main className="mc-container">
      
      <h1 style={{ color: '#fff', textShadow: '3px 3px 0 #000', fontSize: '2rem', marginBottom: '1rem' }}>
        ADVANCEMENTS
      </h1>

      <div className="adv-window">
        
        <div className="adv-header">
          MY ACHIEVEMENTS
        </div>

        <div className="adv-body">
          
          {achievementList.map((adv) => {
            
            const content = (
              <>
                <div className={`adv-icon-frame type-${adv.type}`}>
                  {adv.icon}
                </div>

                <div className="adv-content">
                  <div className={`adv-title title-${adv.type}`}>
                    {adv.title}
                    {adv.link && <span style={{ fontSize: '0.8rem', color: '#aaa', marginLeft: '0.5rem' }}>↗</span>}
                  </div>
                  <div className="adv-desc">
                    {adv.description}
                  </div>
                  <span className="adv-date">Unlocked: {adv.date}</span>
                </div>
              </>
            );

            return (
              <div key={adv.id} className="adv-node">
                {adv.link ? (
                  <a 
                    href={adv.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', width: '100%', textDecoration: 'none', color: 'inherit' }}
                    className="adv-link-hover"
                  >
                    {content}
                  </a>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {content}
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>

      <Link href="/" className="mc-button" style={{ maxWidth: '200px', marginTop: '2rem' }}>
        タイトルに戻る
      </Link>

    </main>
  );
}
