import { MyContext } from '@/components/elements/Cart/Cart';
import { useContext } from 'react';

export const Sum = () => {
  const [value] = useContext(MyContext);
  return (
    <>
      <p>合計金額:{value}</p>
    </>
  );
};
