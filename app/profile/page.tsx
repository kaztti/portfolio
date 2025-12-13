import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="mc-container">

      <h1 style={{ color: '#fff', textShadow: '2px 2px 0 #000', marginBottom: '1rem', fontSize: '2rem' }}>
        PLAYER PROFILE
      </h1>

      <div className="profile-card">

        <div className="profile-left">
          <div className="profile-image-box">
            <Image
              src="/face.png"
              alt="My Avatar"
              width={220}
              height={220}
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <p style={{ fontWeight: 'bold', color: '#404040' }}>Kazutti</p>
        </div>

        <div className="profile-right">
          <div className="status-row">
            <span className="status-label">職業：</span>
            大学生 / 建築学科 / らーす鯖運営 / KUNキッズ
          </div>

          <div className="status-row">
            <span className="status-label">拠点：</span>
            日本 (九州)
          </div>

          <div className="status-row">
            <span className="status-label">特技：</span>
            プログラミング, デザイン, cad
          </div>

          <div className="status-row">
            <span className="status-label">目標：</span>
            コマンド勢として、KUNの50人クラフトに参加すること
          </div>

          <div className="timeline-box" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
            <div className="timeline-line" style={{ left: '2rem', top: '2.5rem', bottom: '2.5rem' }}></div>

            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <div className="timeline-dot dot-green" style={{ width: '20px', height: '20px', marginRight: '1rem' }}></div>
              <div className="timeline-content">
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2022.12.04 - 高校２年の冬</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>らーす鯖の開発が始まる</div>
              </div>
            </div>

            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <div className="timeline-dot dot-purple" style={{ width: '20px', height: '20px', marginRight: '1rem' }}></div>
              <div className="timeline-content">
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2024.04 - 大学に入学</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>プログラミングに興味を持ち始める</div>
              </div>
            </div>

            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <div className="timeline-dot dot-cyan" style={{ width: '20px', height: '20px', marginRight: '1rem' }}></div>
              <div className="timeline-content">
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2024.11 - 大学１年の冬</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>50人クラフトのコマンド勢に憧れ、プラグインの勉強を始める</div>
              </div>
            </div>

            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <div className="timeline-dot dot-blue" style={{ width: '20px', height: '20px', marginRight: '1rem' }}></div>
              <div className="timeline-content">
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2025.05.05 - 大学２年のゴールデンウイーク</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>50人クラフトのメンバーシップに入る</div>
              </div>
            </div>

            <div className="timeline-item" style={{ marginBottom: '0' }}>
              <div className="timeline-dot dot-red" style={{ width: '20px', height: '20px', marginRight: '1rem' }}></div>
              <div className="timeline-content">
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2025.09 - 大学２年の夏</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>50人クラフトのコマンド勢採用に応募したが、不採用となる</div>
                <div className="timeline-date" style={{ fontSize: '1rem' }}>2025.12 - 大学２年の冬</div>
                <div className="timeline-title" style={{ fontSize: '1.2rem' }}>次のコマンド勢採用でリベンジを果たすためにMOD勉強を始める</div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '0.5rem' }}>
            <p style={{ fontSize: '0.8rem', color: '#404040', marginBottom: '0.2rem' }}>Experience Level: 20</p>
            <div className="xp-bar">
              <div className="xp-fill"></div>
            </div>
          </div>
        </div>

      </div>

      <Link href="/" className="back-button">
        タイトルに戻る
      </Link>

    </main>
  );
}