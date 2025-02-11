import { FaStethoscope, FaUserMd, FaHeartbeat, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCamera } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function CentroClinico() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <Header />

      {/* Seção Inicial com Imagem de Fundo */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-centro-clinico.jpg')" }}>
        <div className="bg-black opacity-30 absolute h-full w-full"></div>
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold mb-6 text-white">Centro Clínico Costa</h1>
          <p className="text-xl mb-8">Cuidando da sua saúde com excelência e modernidade.</p>
          <div className="space-x-4">
            <a href="#servicos" className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Nossos Serviços
            </a>
            <a href="#contato" className="bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              Agende uma Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-16 px-4 bg-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaStethoscope className="text-6xl text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Consultas Médicas</h3>
            <p className="text-slate-600">
              Consultas com especialistas em diversas áreas da medicina.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaUserMd className="text-6xl text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Exames Clínicos</h3>
            <p className="text-slate-600">
              Exames laboratoriais e de imagem com tecnologia de ponta.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaHeartbeat className="text-6xl text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Cardiologia</h3>
            <p className="text-slate-600">
              Diagnóstico e tratamento de doenças cardiovasculares.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Especialidades Médicas */}
<section className="py-16 px-4 bg-white">
  <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
    Especialidades Médicas
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Clínica Geral</h3>
      <p className="text-slate-600">
        Atendimento geral para diagnóstico e tratamento de doenças comuns.
      </p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Otorrinolaringologia</h3>
      <p className="text-slate-600">
        Cuidados com ouvido, nariz e garganta, incluindo tratamentos cirúrgicos.
      </p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Ginecologia</h3>
      <p className="text-slate-600">
        Saúde da mulher, exames preventivos e acompanhamento ginecológico.
      </p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Psiquiatria</h3>
      <p className="text-slate-600">
        Diagnóstico e tratamento de transtornos mentais e emocionais.
      </p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Neurologia</h3>
      <p className="text-slate-600">
        Cuidados com o sistema nervoso, incluindo diagnóstico e tratamento de doenças neurológicas.
      </p>
    </div>
  </div>
</section>

{/* Seção de Exames */}
<section className="py-16 px-4 bg-slate-100">
  <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
    Exames
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Eletrocardiograma</h3>
      <p className="text-slate-600">
        Exame para avaliar a atividade elétrica do coração.
      </p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Eletroencefalograma</h3>
      <p className="text-slate-600">
        Exame para avaliar a atividade elétrica do cérebro.
      </p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Ergometria</h3>
      <p className="text-slate-600">
        Teste de esforço para avaliar a saúde cardiovascular.
      </p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Holter</h3>
      <p className="text-slate-600">
        Monitoramento contínuo da atividade cardíaca por 24 horas.
      </p>
    </div>
  </div>
</section>

{/* Seção de Profissionais */}
<section className="py-16 px-4 bg-white">
  <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
    Nossos Profissionais
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200">
         <FaCamera className="text-slate-400 w-16 h-32 m-auto"/>
        </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr. João Silva</h3>
      <p className="text-slate-600">Clínica Geral</p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200">
         <FaCamera className="text-slate-400 w-16 h-32 m-auto"/>
        </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dra. Maria Oliveira</h3>
      <p className="text-slate-600">Otorrinolaringologia</p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200">
         <FaCamera className="text-slate-400 w-16 h-32 m-auto"/>
        </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr. Carlos Souza</h3>
      <p className="text-slate-600">Ginecologia</p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200">
         <FaCamera className="text-slate-400 w-16 h-32 m-auto"/>
        </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dra. Ana Pereira</h3>
      <p className="text-slate-600">Psiquiatria</p>
    </div>
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200">
         <FaCamera className="text-slate-400 w-16 h-32 m-auto"/>
        </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr. Pedro Costa</h3>
      <p className="text-slate-600">Neurologia</p>
    </div>
  </div>
</section>

      {/* Seção de Contato */}
      <section id="contato" className="py-16 px-4 bg-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Contato
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-slate-700" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Endereço</h3>
                <p className="text-slate-600">
                  Rua Sete de Setembro, 2356, Centro<br />
                  Taquari - RS, Brasil
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-slate-700" />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Telefone</h3>
                <p className="text-slate-600">(51) 2129-4040 (Chamadas e WhatsApp)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-slate-700" />
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
              title="Localização do Centro Clínico Costa"
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