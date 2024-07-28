import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layouts/Header/Header';
import { notoSansJP } from '@@/utils/fonts';

export const metadata: Metadata = {
  title: 'テックのーと',
  description: '技術系のアウトプットのためのブログです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
