type InputProps = {
  name: string;
};

export const CalculatorInput = ({ name }: InputProps) => {
  return (
    <div>
      <label>
        {name}:
        <input type="number" name={name} />
      </label>
    </div>
  );
};
