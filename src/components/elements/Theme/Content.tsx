import { useTheme } from './ThemeProvider';

export const Content = () => {
  const theme = useTheme;
  return (
    <div className={`content-${theme}`}>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </div>
  );
};
