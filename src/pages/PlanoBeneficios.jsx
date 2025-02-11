import { FaCheck, FaTimes, FaPhoneAlt } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function PlanosBeneficios() {
  // Dados dos benefícios
  const beneficios = [
    {
      descricao: "Descontos em consultas",
      topazio: true,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Descontos em exames",
      topazio: true,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Descontos em procedimentos",
      topazio: false,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Ambulância gratuita em emergências",
      topazio: false,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Auxílio funeral",
      topazio: false,
      esmeralda: false,
      diamante: true,
    },
    {
      descricao: "Locação de equipamentos ortopédicos",
      topazio: false,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Suporte ao cliente 24/7",
      topazio: false,
      esmeralda: true,
      diamante: true,
    },
    {
      descricao: "Ampla rede de convênio",
      topazio: true,
      esmeralda: true,
      diamante: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <Header />

      {/* Tabela de Benefícios */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Benefícios dos Planos
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="py-4 px-6 text-left">Descrição do Benefício</th>
                <th className="py-4 px-6 text-center">Topázio Economic</th>
                <th className="py-4 px-6 text-center">Esmeralda Basic</th>
                <th className="py-4 px-6 text-center">Diamante Plus</th>
              </tr>
            </thead>
            <tbody>
              {beneficios.map((beneficio, index) => (
                <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slate-800">{beneficio.descricao}</td>
                  <td className="py-4 px-6 text-center">
                    {beneficio.topazio ? (
                      <FaCheck className="text-green-500 inline-block" />
                    ) : (
                      <FaTimes className="text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {beneficio.esmeralda ? (
                      <FaCheck className="text-green-500 inline-block" />
                    ) : (
                      <FaTimes className="text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {beneficio.diamante ? (
                      <FaCheck className="text-green-500 inline-block" />
                    ) : (
                      <FaTimes className="text-red-500 inline-block" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Endereço</h3>
              <p className="text-slate-300">
                Rua Sete de Setembro, 2356, Centro<br />
                Taquari - RS, Brasil
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-slate-300">
                <FaPhoneAlt className="inline-block mr-2" />
                (51) 2129-4040 (Chamadas e WhatsApp)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/saude" className="text-slate-300 hover:text-sky-500">
                    Saúde
                  </Link>
                </li>
                <li>
                  <Link to="/luto" className="text-slate-300 hover:text-purple-500">
                    Luto
                  </Link>
                </li>
                <li>
                  <Link to="/plano-costa" className="text-slate-300 hover:text-sky-500">
                    Plano Costa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}