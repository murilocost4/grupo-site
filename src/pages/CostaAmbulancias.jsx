import { FaAmbulance, FaFirstAid, FaUserMd, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";
// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logoUrl from '/assets/logopng.png'
import vctUrl from '/assets/Vector.svg'
import ambimg from '/assets/amb-img.jpg'
import { PiAmbulanceFill } from "react-icons/pi";
import { TbUrgent } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";




export default function CostaAmbulancias() {
  return (
    <>
        <header className="flex justify-evenly items-center bg-slate-800 w-full py-2">
            <img src={logoUrl} alt="Logo" className="h-16"/>
            <nav className="flex gap-10">
              <a href="/sobrenos" className="font-light text-white text-sm">Sobre nós</a>
              <a href="/sobrenos" className="font-light text-white text-sm">Nossos Serviços</a>
              <a href="/sobrenos" className="font-light text-white text-sm">Frota</a>
              <a href="/sobrenos" className="font-light text-white text-sm">Regiões Atendidas</a>
              <a href="/sobrenos" className="font-light text-white text-sm">Contato</a>
              <a href="/sobrenos" className="font-light text-white text-sm">Trabalhe Conosco</a>
            </nav>
        </header>
        <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-amb.jpg')" }}>
          <div className="bg-slate-800 opacity-80 absolute h-full w-full"></div>
          <div className="relative text-center text-white flex flex-col items-center gap-24">
            <h1 className="text-5xl font-bold mb-6 text-white max-w-3xl">Onde cada segundo importa, estamos prontos para você.</h1>
            <div className="space-x-4 border-2 border-orange-500 rounded-2xl max-w-xs p-4">
              <p className="font-bold text-2xl mb-1">Precisa de ajuda agora?</p>
              <p className="font-light leading-tight">Ligue para 0800 000 4356 ou fale com nosso suporte em (51) 2129-4040.</p>
            </div>
          </div>
        </section>
        <section className="flex bg-gray-200">
          <div className="w-7/8 bg-orange-500 rounded-tr-4xl">
            <div className="absolute ml-54 mt-8 h-2xl w-md rounded-full flex items-center justify-center bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/assets/amb-img.jpg')" }}>
              <img src={vctUrl} alt="Vector" className=""/>
            </div>
          </div>
          <div className="w-full py-28 pl-14">
            <h3 className="font-bold text-left text-xl mb-4">Tradição e Inovação na Saúde</h3>
            <p className="font-light text-left w-xl">Há anos, a Costa Ambulâncias atua com excelência no transporte de pacientes e atendimento emergencial, oferecendo serviços que aliam rapidez, segurança e cuidado. Com uma frota moderna, profissionais capacitados e uma rede de atendimento abrangente, estamos sempre prontos para garantir o melhor suporte nos momentos em que mais importa. Nosso compromisso é com a sua saúde, sua segurança e sua confiança.</p>
          </div>
        </section>
        <section className="bg-slate-800 flex flex-col items-center pt-30 pb-18">
          <div className="text-center w-xl text-white">
            <h4 className="font-bold text-3xl mb-4">O que fazemos por você:</h4>
            <p className="font-medium text-xl">Na Costa Ambulâncias, oferecemos uma gama completa de serviços para garantir o cuidado e o suporte que você precisa, a qualquer hora e em qualquer lugar.</p>
          </div>
          <div className="flex gap-10 mt-10">
            <div className="flex flex-col items-center w-80">
              <PiAmbulanceFill className="text-white size-16 mb-4"/>
              <div className="py-8 px-2 border-1 border-orange-500 rounded-2xl text-center text-white">
                <p className="font-light"><span className="font-bold">Transporte de Pacientes:</span> Realizamos o transporte de pacientes em situações de urgência e emergência com segurança e conforto, utilizando ambulâncias equipadas e equipes qualificadas.</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-80">
              <TbUrgent className="text-white size-16 mb-4"/>
              <div className="py-8 px-2 border-1 border-orange-500 rounded-2xl text-center text-white">
                <p className="font-light"><span className="font-bold">Atendimento Emergencial 24h:</span> Disponibilizamos atendimento de emergência a qualquer momento, com rapidez e eficiência para atender às situações mais críticas.</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-80">
              <MdHealthAndSafety className="text-white size-16 mb-4"/>
              <div className="py-8 px-2 border-1 border-orange-500 rounded-2xl text-center text-white">
                <p className="font-light"><span className="font-bold">Cobertura de Eventos:</span> Oferecemos cobertura completa para eventos, com ambulâncias prontas para atender emergências durante eventos de pequeno ou grande porte, garantindo tranquilidade para organizadores e participantes.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl text-white w-3xl text-center mt-4">Conte com a Costa Ambulâncias para cuidar de quem você ama, a qualquer hora e em qualquer situação!</p>
          </div>
        </section>
        <section className="w-full relative overflow-hidden"> {/* Adicione relative e overflow-hidden */}
          {/* Vetor posicionado à esquerda e centralizado verticalmente */}
          <img
            src={vctUrl}
            alt="vector"
            className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-auto h-[80%] -translate-x-1/2" // Ajuste o translate-x para controlar a parte exibida
          />

          <div className="bg-gray-200 py-16 flex">
            <div className="flex flex-col w-2/7 gap-4 ml-80">
              <p className="text-slate-800 text-left font-bold text-3xl w-2/3">Compromisso com a vida, tecnologia no atendimento.</p>
              <div className="w-full py-3 bg-orange-500 text-center text-white rounded-lg font-medium">Frota de última geração</div>
              <div className="w-full py-3 bg-orange-500 text-center text-white rounded-lg font-medium">Equipe qualificada e atendimento humanizado.</div>
              <div className="w-full py-3 bg-orange-500 text-center text-white rounded-lg font-medium">Abrangência regional, garantindo saúde para todos.</div>
            </div>
            <div className="flex items-center justify-center p-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-70 w-xl rounded-lg overflow-hidden ml-16">
                {/* Imagem superior esquerda */}
                <div className="col-span-1 row-span-1 bg-slate-800 rounded-lg">
                  <img
                    src={ambimg}
                    alt="Imagem 1"
                    className="w-full h-full object-cover rounded-lg opacity-25"
                  />
                </div>

                {/* Imagem direita (ocupa toda a coluna direita) */}
                <div className="col-span-1 row-span-2 bg-slate-800 rounded-lg">
                  <img
                    src={ambimg}
                    alt="Imagem 2"
                    className="w-full h-full object-cover rounded-lg opacity-25"
                  />
                </div>

                {/* Duas imagens inferiores esquerda */}
                <div className="col-span-1 row-span-1 flex gap-2">
                  <div className="col-span-1 row-span-2 bg-slate-800 rounded-lg">
                    <img
                      src={ambimg}
                      alt="Imagem 3"
                      className="w-full h-full object-cover rounded-lg opacity-25"
                    />
                  </div>
                  <div className="col-span-1 row-span-2 bg-slate-800 rounded-lg">
                    <img
                      src={ambimg}
                      alt="Imagem 4"
                      className="w-full h-full object-cover rounded-lg opacity-25"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 pt-16 pb-10 flex">
            <div className="flex flex-col w-2/7 gap-4 ml-80">
              <p className="text-slate-800 text-left font-bold text-3xl"><span className="text-orange-500">Frota de ponta: </span>conforto e tecnologia em movimento.</p>
              <p className="text-xl font-bold text-slate-800 w-2/3 mb-2">Ambulâncias equipadas para salvar vidas.</p>
              <div className="bg-slate-800 rounded-2xl h-38">
                <img
                  src={ambimg}
                  alt="Imagem 1"
                  className="w-full h-full object-cover rounded-2xl opacity-25"
                />
              </div>
            </div>
            <div className="w-1/3 ml-20 leading-5 ">
              <p className="text-slate-800">
                Com um total de 10 ambulâncias em operação, incluindo as 4 novas unidades recém-adquiridas, garantimos um atendimento rápido e eficiente para qualquer emergência. <br />
                <br />
                <span className="font-bold">Equipamentos de Última Geração</span> <br />
                <br />
                Nossas ambulâncias estão equipadas com monitoramento cardíaco avançado, garantindo um acompanhamento completo dos sinais vitais dos pacientes em tempo real. <br />
                <br />
                Além disso, todas as unidades possuem sistemas de climatização para proporcionar conforto e bem-estar durante o transporte, independente das condições climáticas.<br />
                <br />
                Estamos prontos para oferecer um atendimento de excelência, com tecnologia e dedicação para cuidar de você e de sua família!<br />
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-slate-800 py-16 text-center">
            <h5 className="text-3xl font-bold text-white"><span className="text-orange-500">Cidades Atendidas: </span>Levamos Saúde ao Vale do Taquari e Além</h5>
            <p className="font-light text-white mt-4 text-lg">Estrela, Lajeado, Montenegro, Porto Alegre, Taquari, Teutônia e Venâncio Aires.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-100 py-16 gap-4">
            <h6 className="text-4xl text-orange-500 font-bold">Nossa rede de parceiros</h6>
            <p className="text-2xl text-slate-800 font-bold w-96">Hospitais e clínicas conveniadas: seu acesso à saúde está aqui.</p>
            <div className="grid grid-cols-3 mt-8 gap-x-4 gap-y-2">
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Hospitais</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Clínicas</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Profissionais</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Estrela</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Lajeado</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Montenegro</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Porto Alegre</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Venâncio Aires</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl">Teutônia</div>
              <div className="w-50 bg-orange-500 p-3 font-bold text-white rounded-xl col-start-2">Taquari</div>
            </div>
          </div>
        </section>
        <section className="bg-slate-800 flex gap-24 py-4 items-center justify-center">
          <div className="flex flex-col items-center my-auto">
            <img src={logoUrl} alt="Logo" className="h-20"/>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/costa.ambulancias/"><FaInstagram className="text-white size-10"/></a>
              <a href="https://www.facebook.com/planocosta/"><FaFacebookSquare className="text-white size-10"/></a>
            </div>
          </div>
          <nav className="border-l-1 border-white flex flex-col gap-1 pl-6 py-2">
            <a href="" className="font-light text-white font-sm">Sobre nós</a>
            <a href="" className="font-light text-white font-sm">Nossos serviços</a>
            <a href="" className="font-light text-white font-sm">Frota</a>
            <a href="" className="font-light text-white font-sm">Regiões atendidas</a>
            <a href="" className="font-light text-white font-sm">Contato</a>
            <a href="" className="font-light text-white font-sm">Trabalhe conosco</a>
          </nav>
          <div className="border-3 border-orange-500 rounded-4xl my-4 px-8 py-5 w-fit ml-40">
            <h6 className="font-bold text-white text-3xl mb-2">Precisa de ajuda agora?</h6>
            <p className="text-center font-light text-white text-lg">Ligue para 0800 000 4356 ou fale com <br/>nosso suporte em (51) 2129-4040.</p>
          </div>
        </section>
        <footer className="bg-gray-100 text-center py-4">
          <p className="text-slate-800 font-normal text-lg">© 2024 Costa Ambulâncias. Todos os direitos reservados.</p>
        </footer>
    </>
  );
}