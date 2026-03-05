function Navbar({ title, darkMode, toggleDarkMode }) {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-200 dark:bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}

export default Navbar;