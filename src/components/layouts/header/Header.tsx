'use client';

import { SITE_NAME } from '@/const/meta';

import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">{SITE_NAME}</Link>
      </div>
    </header>
  );
};
