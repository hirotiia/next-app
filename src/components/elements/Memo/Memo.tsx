import { CreateMemo } from './CreateMemo';
import { MemoItems } from './MemoItems';
import { MemoProvider } from '../Memo/context/MemoProvider';

export const Memo = () => {
  return (
    <MemoProvider>
      <MemoItems />
      <CreateMemo />
    </MemoProvider>
  );
};
