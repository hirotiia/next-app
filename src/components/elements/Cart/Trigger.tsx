import { useContext } from 'react';
import { MyContext } from '@/components/elements/Cart/Cart';

export const Trigger = () => {
  const [, setCount] = useContext(MyContext);
  const triggerHandler = () => setCount((prev: number) => prev + 1);

  return (
    <>
      <button type="button" onClick={triggerHandler}>
        Click!
      </button>
    </>
  );
};
