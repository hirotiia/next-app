export type State = {
  result: number;
};

export type Action = {
  type: string;
  amount: number;
};

export const CounterReducer = (state: State, { type, amount }: Action): State => {
  switch (type) {
    case 'plus':
      return { ...state, result: state.result + amount };
    case 'minus':
      return { ...state, result: state.result - amount };
    default:
      return state;
  }
};
