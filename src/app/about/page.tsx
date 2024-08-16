import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { Theme } from '@/components/elements/Theme/Theme';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'プロフィールページ'} />
      <Theme />
    </main>
  );
}
