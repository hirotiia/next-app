import { MouseEvent, useContext } from 'react';
import { CounterContext } from './CounterProvider';

type CountNumber = {
  id: string;
  type: string;
  amount: number;
};

type CounterButtonProps = {
  countNumbers: CountNumber[];
};

type Dispatch = [null, (action: { type: string; amount: number }) => void];

export const CounterButton = ({ countNumbers }: CounterButtonProps) => {
  const [, dispatch]: Dispatch = useContext(CounterContext);
  const counterHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const { type } = currentTarget.dataset;
    const { amount } = currentTarget.dataset;

    if (typeof type === 'string' && typeof amount === 'number') {
      dispatch({ type, amount });
    }
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
            {`${count.type}${String(count.amount)}`}
          </button>
        </li>
      ))}
    </ul>
  );
};
