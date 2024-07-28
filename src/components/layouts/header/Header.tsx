import { siteData } from '@/const/siteData';

import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">{siteData.title}</Link>
      </div>
      <nav>
        <ul>
          <li>about</li>
        </ul>
      </nav>
    </header>
  );
};
