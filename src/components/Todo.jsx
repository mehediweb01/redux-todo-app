import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";
const Todo = () => {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {todo.map((todo) => (
        <div key={todo.id}>demo text</div>
      ))}
    </div>
  );
};

export default Todo;
