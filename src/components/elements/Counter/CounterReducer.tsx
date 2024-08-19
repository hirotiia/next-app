type State = {
  result: number;
};

type Action = {
  type: string;
  amount: number;
};

export const CounterReducer = (state: State, { type, amount }: Action) => {
  console.log(state, type, amount);
};
