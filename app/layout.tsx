import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Kazutti Portfolio",
  description: "かずっちのポートフォリオ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={pixelFont.variable}>
        
        <div style={{
          flex: 1,               
          display: 'flex',       
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',         
          paddingBottom: '2rem'  
        }}>
          {children}
        </div>

        <footer style={{
          width: '100%',
          textAlign: 'center',
          padding: '1rem',
          
          color: '#e0e0e0',
          textShadow: '2px 2px 0 #000000',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderTop: '2px solid #000000',
          
          fontSize: '0.8rem',
          fontFamily: 'var(--font-pixel), monospace',
          lineHeight: '1.5',
          flexShrink: 0 
        }}>
          <p>
            {new Date().getFullYear()} © Kazutti. All rights reserved.
          </p>
          <p style={{ color: '#aaaaaa', fontSize: '0.7rem' }}>
            Crafted with Next.js and Vercel.
          </p>
        </footer>
        
      </body>
    </html>
  );
}
