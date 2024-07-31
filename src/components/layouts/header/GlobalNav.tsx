import Link from 'next/link';

export const GlobalNav = () => {
  const navItems = [
    { title: 'about', url: '/about' },
    { title: 'articles', url: '/articles' },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={`${item.title}-${index}`}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
