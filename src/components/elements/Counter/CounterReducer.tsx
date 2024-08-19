export type State = {
  result: number;
};

export type Action = {
  type: string;
  amount: number;
};

export const CounterReducer = (state: State, { type, amount }: Action): State => {
  console.log(type, amount);
  return state;
};
