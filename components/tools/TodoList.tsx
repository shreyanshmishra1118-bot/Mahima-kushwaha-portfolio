import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Failed to parse todos from localStorage", error);
      return [];
    }
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto text-slate-300">
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors">
          Add
        </button>
      </form>
      <ul className="space-y-2 max-h-80 overflow-y-auto pr-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex items-center justify-between bg-zinc-800 p-3 rounded-md transition-colors ${todo.completed ? 'opacity-50' : ''}`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-grow break-words pr-2 ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-400 hover:text-red-500 transition-colors flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;