import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {todo.map((todo) => (
        <div key={todo.id}>
          <p
            className={`font-bold text-2xl py-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
