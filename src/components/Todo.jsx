import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";
import { useState } from "react";
const Todo = () => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const AddedTodo = () => {
    if (text.trim()) {
      if (edit) {
        dispatch(deleteTodo(edit));
        dispatch(addTodo(`${text} (edited)`));
        setEdit(null);
      } else {
        dispatch(addTodo(text));
      }
    }
    setText("");
  };
  const editTodo = (todo) => {
    setEdit(todo.id);
    setText(todo.text);
  };
  return (
    <div className="min-h-screen bg-gray-300/50">
      <div className="w-1/2 mx-auto py-8 flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center w-full gap-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus:shadow-md focus:shadow-black w-[80%]"
          />
          <button
            onClick={AddedTodo}
            type="submit"
            className="bg-green-400 px-4 py-2 rounded-md text-slate-800 hover:bg-green-600 transition-all duration-300 active:translate-y-0.5 active:transition-all active:duration-100"
          >
            {edit ? "Update todo" : "Add todo"}
          </button>
        </div>
        <ul className="w-full mx-auto mt-8">
          {todo.map((todoList) => (
            <li
              key={todoList.id}
              className="flex justify-between gap-8 bg-sky-600/50 py-2 px-4 text-white shadow shadow-white rounded-md"
            >
              <div
                onClick={() => dispatch(toggleTodo(todoList.id))}
                className="flex flex-col justify-center items-center gap-1"
              >
                <span
                  className={`text-xl font-semibold text-slate-800/75 font-serif ${
                    todoList.completed ? "line-through text-slate-300/50 " : ""
                  }`}
                >
                  {todoList.text}
                </span>
                <span
                  className={`text-base font-thin text-white font-serif ${
                    todoList.completed ? "line-through text-slate-300/50" : ""
                  }`}
                >
                  {new Date(todoList.id).toLocaleString()}
                </span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => editTodo(todoList)}
                  className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todoList.id))}
                  className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600"
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
