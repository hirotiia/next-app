'use client';

import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { useState } from 'react';

export default function Home() {
  const array = [1, 2, 3, 4, 5];
  const [shuffledArray, setShuffle] = useState(array);
  const shuffle = () => {
    const sortedArray = shuffledArray.sort(() => Math.random() - 0.5);

    setShuffle([...sortedArray]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'トップページ'} />
      <p>
        <b>{shuffledArray}</b>
      </p>
      <button type="button" onClick={shuffle}>
        shuffle
      </button>
    </main>
  );
}
