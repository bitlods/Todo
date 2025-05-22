import { useEffect, useState } from 'react';
import TodoForm from './com/TodoForm';
import TodoList from './com/TodoList';
import api from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await api.get('/todos');
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch todos");
    }
  };

 const handleSummarize = async () => {
  try {
    const res = await api.post('/todos/summarize');
 // FIXED ENDPOINT
    toast.success(res.data); // response is "Summary sent to Slack"
  } catch (err) {
    console.error(err);
    toast.error("Failed to summarize");
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Todo Summary Assistant</h1>
      <TodoForm onAdd={(todo) => setTodos([...todos, todo])} />
      <TodoList todos={todos} setTodos={setTodos} />
      <button onClick={handleSummarize} className="bg-green-600 text-white px-4 py-1 mt-4">Summarize & Send</button>
      <ToastContainer />
    </div>
  );
}

export default App;
