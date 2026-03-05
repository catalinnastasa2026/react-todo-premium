export default function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li className="flex justify-between items-center py-1">
      <span
        className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => toggleTask(index)}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(index)}
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        ❌
      </button>
    </li>
  );
}