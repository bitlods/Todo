import api from "../api";
import { toast } from "react-toastify";

export default function TodoList({ todos, setTodos }) {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success("Todo deleted");
    } catch (err) {
      console.error("Delete failed:", err); // 👈 use the error
      toast.error("Failed to delete");
    }
  };

  return (
    <ul className="my-4 space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between border-b pb-1">
          {todo.task}
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-red-500"
          >
          </button>
        </li>
      ))}
    </ul>
  );
}
