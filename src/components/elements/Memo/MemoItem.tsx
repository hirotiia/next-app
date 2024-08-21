type Props = {
  value: string;
};

export const MemoItem = ({ value }: Props) => {
  return (
    <li>
      <button type="button">完了</button>
      {value}
    </li>
  );
};
