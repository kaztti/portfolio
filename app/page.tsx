import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      
      {/* 看板 */}
      <div className="sign-main">
        <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', lineHeight: '1.4' }}>
          WELCOME TO MY WORLD
        </h1>
        <p className="sign-subtext">
          ここは Kazutti のポートフォリオです。
          <br />
          ぜひ冒険していってね！
        </p>
      </div>

      {/* メニューエリア */}
      <div className="inventory">
        <h2 className="inventory-title">メニュー</h2>
        
        <Link href="/profile" style={{ width: '100%' }}>
          <button className="mc-button">プロフィール</button>
        </Link>

        <button className="mc-button">私のスキル</button>

        <button className="mc-button">実績一覧</button>
      </div>
      
    </main>
  );
}
