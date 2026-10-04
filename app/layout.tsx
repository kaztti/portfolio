import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { GameShell } from "./_game/GameShell";
import "./globals.css";
import "./game.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Kazutti Portfolio",
  description: "かずっちのポートフォリオ。マイクラの世界を冒険しながら、プロフィール・スキル・実績を見ていってね。",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const loadingScreenScript = `try{if(sessionStorage.getItem("kazutti-loaded"))document.documentElement.classList.add("skip-loading");sessionStorage.setItem("kazutti-loaded","1")}catch(e){}`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: loadingScreenScript }} />
      </head>
      <body className={pixelFont.variable}>
        <div className="loading-screen" aria-hidden="true">
          <p className="loading-title">ワールドを読み込み中</p>
          <p className="loading-subtitle">地形を生成しています…</p>
          <div className="loading-bar">
            <div className="loading-fill" />
          </div>
        </div>

        <div className="page-content">{children}</div>
        <footer className="site-footer">
          <p>{new Date().getFullYear()} © Kazutti. All rights reserved.</p>
          <p className="site-footer-credit">Crafted with Next.js and Vercel.</p>
          <p className="site-footer-hint">
            <kbd>F3</kbd> デバッグ <kbd>L</kbd> 進捗 <kbd>Esc</kbd> メニュー
          </p>
        </footer>
        <GameShell />
      </body>
    </html>
  );
}
