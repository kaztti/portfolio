import Link from "next/link";
import "./title.css";

const menuItems = [
  { href: "/profile", label: "プロフィール" },
  { href: "/skills", label: "私のスキル" },
  { href: "/achievements", label: "実績一覧" },
  { href: "/works", label: "作品一覧" },
];

export default function Home() {
  return (
    <main className="container title-page">
      <section className="sign-main">
        <h1 className="home-title">WELCOME TO MY WORLD</h1>
        <p className="sign-subtext">
          ここは Kazutti のポートフォリオです。
          <br />
          ぜひ冒険していってね！
        </p>
      </section>

      <nav className="inventory title-menu" aria-label="メインメニュー">
        <h2 className="inventory-title">メニュー</h2>
        {menuItems.map(({ href, label }) => (
          <Link key={href} href={href} className="mc-button">
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
