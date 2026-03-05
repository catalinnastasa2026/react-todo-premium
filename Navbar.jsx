export default function Navbar({ title }) {
  return (
    <nav className="bg-blue-500 dark:bg-blue-700 text-white p-4 text-center font-bold text-xl shadow">
      {title}
    </nav>
  );
}
