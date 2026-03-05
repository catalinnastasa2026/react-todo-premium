import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskItem from "./components/TaskItem";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode ? "dark" : ""} min-h-screen transition-colors duration-300`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar
          title="Site-ul lui Nastasa"
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <main className="max-w-3xl mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">
              Todo List Premium 📝
            </h1>

            {/* Input + Button */}
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="Adaugă un task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                className="flex-1 p-3 border rounded-l-2xl outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700"
              />
              <button
                onClick={addTask}
                className="px-6 py-3 bg-blue-500 text-white rounded-r-2xl hover:bg-blue-600 transition"
              >
                Adaugă
              </button>
            </div>

            {/* Task List */}
            <ul className="space-y-3">
              {tasks.map((t, index) => (
                <TaskItem
                  key={index}
                  task={t}
                  toggleTask={() => toggleTask(index)}
                  deleteTask={() => deleteTask(index)}
                />
              ))}
            </ul>

            {/* Empty State */}
            {tasks.length === 0 && (
              <p className="text-center mt-6 text-gray-500 dark:text-gray-400">
                Nu ai niciun task, adaugă unul acum 🚀
              </p>
            )}
          </div>
        </main>

        <Footer year={2026} />
      </div>
    </div>
  );
}

export default App;