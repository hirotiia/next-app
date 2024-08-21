import { MemoItem } from './MemoItem';
import { GetState } from './MemoProvider';

export const MemoItems = () => {
  const state = GetState();
  return (
    <>
      {state.map((target) => (
        <MemoItem key={target.title} value={target.title} />
      ))}
    </>
  );
};
