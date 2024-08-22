'use client';

import { useEffect, useState } from 'react';

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log('一度だけ呼ばれます。');
    window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <h2>
      <time>{timer}</time>
      <span>秒経過</span>
    </h2>
  );
};
