import { Link } from "react-router-dom";

export default function Button({ to, children, color }) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center w-1/2 h-screen text-4xl font-bold text-slate-700 transition-all duration-300 hover:text-5xl ${color}`}
    >
      {children}
    </Link>
  );
}