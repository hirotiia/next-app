import { Content } from './Content';
import { Radiobox } from './Radiobox';
import { ThemeProvider } from './ThemeProvider';

export const Theme = () => {
  const colors: Array<'light' | 'dark' | 'red'> = ['light', 'dark', 'red'];

  return (
    <ThemeProvider>
      <Radiobox colors={colors} />
      <Content />
    </ThemeProvider>
  );
};
