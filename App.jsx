import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const toggleTask = (indexToToggle) => {
    setTasks(
      tasks.map((t, index) =>
        index === indexToToggle ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar title="React Todo Premium 🚀" />

      <main className="flex-1 p-6 max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Todo List</h1>

        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Adaugă un task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="px-6 py-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
          >
            Adaugă
          </button>
        </div>

        <ul className="bg-white dark:bg-gray-800 rounded shadow divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer ${
                  t.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </main>

      <Footer year={2026} />
    </div>
  );
}

export default App;
