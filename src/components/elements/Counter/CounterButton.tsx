import { MouseEvent, useContext } from 'react';
import { DispatchContext } from './CounterContext';

type CountNumber = {
  id: string;
  type: string;
  amount: number;
};

type CounterButtonProps = {
  countNumbers: CountNumber[];
};

export const CounterButton = ({ countNumbers }: CounterButtonProps) => {
  const dispatch = useContext(DispatchContext);
  const counterHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const { type } = currentTarget.dataset;
    const amount = Number(currentTarget.dataset.amount);

    if (!type || !amount) {
      return;
    }

    dispatch({ type, amount });
  };

  return (
    <ul>
      {countNumbers.map((count) => (
        <li key={`${count.id}`}>
          <button
            type="button"
            data-type={count.type}
            data-amount={count.amount}
            onClick={counterHandler}
          >
            {count.type === 'minus' && '-'}
            {count.type === 'plus' && '+'}
            {`${String(count.amount)}`}
          </button>
        </li>
      ))}
    </ul>
  );
};
