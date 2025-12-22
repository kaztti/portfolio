import Link from "next/link";

export default function Home() {
  return (
    <main className="container">

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

      <div className="inventory">
        <h2 className="inventory-title">メニュー</h2>

        <Link href="/profile" className="mc-button" style={{ display: 'block', textDecoration: 'none' }}>
          プロフィール
        </Link>

        <Link href="/skills" className="mc-button" style={{ display: 'block', textDecoration: 'none' }}>
          私のスキル
        </Link>

        <Link href="/achievements" className="mc-button" style={{ display: 'block', textDecoration: 'none' }}>
          実績一覧
        </Link>
      </div>

    </main>
  );
}
