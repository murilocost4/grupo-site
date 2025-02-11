import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-100 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Grupo Costa
        </Link>
        <nav>
          <ul className="flex space-x-6 text-slate-600">
            <li>
              <Link to="/saude" className="hover:text-sky-500 transition-colors">
                Saúde
              </Link>
            </li>
            <li>
              <Link to="/luto" className="hover:text-amber-500 transition-colors">
                Luto
              </Link>
            </li>
            <li>
              <Link to="/contato" className="p-2 rounded-md bg-sky-500 transition-colors text-white">
                Emergência
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}