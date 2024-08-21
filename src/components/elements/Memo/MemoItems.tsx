import { useContext } from 'react';
import { MemoItem } from './MemoItem';
import { MemoContext } from '@/components/elements/Memo/context/MemoProvider';

export const MemoItems = () => {
  const state = useContext(MemoContext);
  return (
    <>
      {state.map((target) => (
        <MemoItem key={target.title} value={target.title} />
      ))}
    </>
  );
};
