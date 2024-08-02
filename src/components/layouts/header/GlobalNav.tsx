import Link from 'next/link';

export const GlobalNav = () => {
  const navItems = [
    { title: 'about', url: '/about' },
    { title: 'articles', url: '/articles' },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={`${item.title}`}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
