type TodoItem = {
  id: number;
  content: string;
};

type TodoItemList = {
  items: TodoItem[];
  deleteTodo: (id: number) => void;
};

export const List = ({ items, deleteTodo }: TodoItemList) => {
  const complete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <p>List.tsx</p>
      <ul aria-busy="true" className="border-2 border-solid">
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => complete(item.id)}>
              完了
            </button>
            {item.content}
          </li>
        ))}
      </ul>
    </>
  );
};
