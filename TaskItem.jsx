function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
      <span
        onClick={toggleTask}
        className={`cursor-pointer ${task.completed ? "line-through opacity-50" : ""}`}
      >
        {task.text}
      </span>
      <button
        onClick={deleteTask}
        className="text-red-500 hover:text-red-700 transition"
      >
        ❌
      </button>
    </li>
  );
}

export default TaskItem;