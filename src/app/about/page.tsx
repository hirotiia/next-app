import { Counter } from '@/components/elements/Counter/Counter';
import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'プロフィールページ'} />
      <Counter />
    </main>
  );
}
