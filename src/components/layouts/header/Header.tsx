import { siteData } from '@/const/siteData';
import { GlobalNav } from '@/components/layouts/Header/GlobalNav';

import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">{siteData.title}</Link>
      </div>
      <GlobalNav />
    </header>
  );
};
