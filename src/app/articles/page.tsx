import { Cart } from '@/components/elements/Cart/Cart';
import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';

export default function Home() {
  const products = [
    { name: 'Apple', price: 100, checked: false },
    { name: 'Banana', price: 300, checked: false },
    { name: 'Cherry', price: 400, checked: false },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'記事一覧ページ'} />
      <Cart products={products} />
    </main>
  );
}
