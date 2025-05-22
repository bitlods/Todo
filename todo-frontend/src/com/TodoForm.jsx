import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

export default function TodoForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return;

    try {
      const res = await api.post("/todos", { task, completed: false });
      onAdd(res.data);
      setTask("");
      toast.success("Todo added");
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to add todo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border px-2"
        placeholder="New todo"
      />
      <button type="submit" className="bg-blue-500 text-white px-2">
        Add
      </button>
    </form>
  );
}
