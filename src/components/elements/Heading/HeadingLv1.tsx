type Props = {
  title: string;
};

export const HeadingLv1 = ({ title }: Props) => {
  return (
    <div className="text-center text-7xl">
      <h1>{title}</h1>
    </div>
  );
};
