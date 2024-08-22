import { Cart } from '@/components/elements/Cart/Cart';
import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { Timer } from '@/components/elements/Timer/Timer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'記事一覧ページ'} />
      <Cart />
      <Timer />
    </main>
  );
}
