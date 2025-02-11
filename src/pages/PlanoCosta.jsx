import { FaCheck, FaStar, FaUserFriends, FaPhoneAlt, FaAmbulance, FaHandHoldingHeart, FaShoppingCart, FaMapMarkerAlt, FaGem, FaEnvelope, FaClock } from "react-icons/fa";
import { GiTopaz, GiEmerald } from "react-icons/gi";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function PlanoCosta() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <Header />

      {/* Seção Inicial com Imagem de Fundo */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-plano-costa.jpg')" }}>
        <div className=""></div>
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Plano Costa</h1>
          <p className="text-xl mb-8">Sua saúde e bem-estar em primeiro lugar.</p>
          <div className="space-x-4">
            <a href="#planos" className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
              Conheça Nossos Planos
            </a>
            <a href="#contato" className="bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Benefícios do Plano Costa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaUserFriends className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Suporte ao Cliente</h3>
            <p className="text-slate-600">
              Atendimento personalizado e suporte 24/7 para você e sua família.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaShoppingCart className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Descontos em Consultas</h3>
            <p className="text-slate-600">
              Descontos exclusivos em consultas, exames e procedimentos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ampla Rede de Convênio</h3>
            <p className="text-slate-600">
              Acesso a uma ampla rede de clínicas e profissionais de saúde.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaAmbulance className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ambulância Gratuita</h3>
            <p className="text-slate-600">
              Serviço de ambulância gratuito em casos de emergência.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaHandHoldingHeart className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Auxílio Funeral</h3>
            <p className="text-slate-600">
              Suporte completo em momentos difíceis.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaCheck className="text-6xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Equipamentos Ortopédicos</h3>
            <p className="text-slate-600">
              Locação de equipamentos ortopédicos com descontos especiais.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="bg-slate-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Nossos Planos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <GiTopaz className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Topázio Economic</h3>
            <p className="text-slate-600 mb-6">
              Plano individual com cobertura básica para consultas e exames.
            </p>
            <Link to="/planos-beneficios" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all">
              Saiba Mais
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <GiEmerald className="text-6xl text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Esmeralda Basic</h3>
            <p className="text-slate-600 mb-6">
              Plano familiar com descontos em consultas e procedimentos.
            </p>
            <Link to="/planos-beneficios" className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
              Saiba Mais
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaGem className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Diamante Plus</h3>
            <p className="text-slate-600 mb-6">
              Plano familiar premium com cobertura ampla e benefícios exclusivos.
            </p>
            <Link to="/planos-beneficios" className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Contato
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-sky-500" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Endereço</h3>
                <p className="text-slate-600">
                  Rua Sete de Setembro, 2356, Centro<br />
                  Taquari - RS, Brasil
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-sky-500" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Telefone</h3>
                <p className="text-slate-600">(51) 2129-4040 (Chamadas e WhatsApp)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-sky-500" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">E-mail</h3>
                <p className="text-slate-600">contato@planocosta.com.br</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-sky-500" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Horário de Atendimento</h3>
                <p className="text-slate-600">
                  Segunda a sexta: 08:00 - 12:00 e 13:15 - 17:45<br />
                  Sábado: 09:00 - 11:45
                </p>
              </div>
            </div>
          </div>

          {/* Mapa do Google Maps */}
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Localização do Plano Costa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.073144999999!2d-51.864123684892!3d-29.72138238200563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQzJzE2LjkiUyA1McKwNTEnNDEuOSJX!5e0!3m2!1spt-BR!2sbr!4v1633024800000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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