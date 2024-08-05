import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { Todo } from '@/components/elements/Todo/Todo';

export default function Home() {
  const defaultTodoItems = [
    { id: 1, content: '店を予約する' },
    { id: 2, content: '卵を買う' },
    { id: 3, content: '郵便に出す' },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'プロフィールページ'} />
      <Todo items={defaultTodoItems} />
    </main>
  );
}
