import { TypeAnimation } from 'react-type-animation';
import BackgroundAnimado from './BackgroundAnimado';

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 text-white overflow-hidden"
    >
      <BackgroundAnimado />

      <div className="z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center">
          <h1 className=" md:text-6xl font-extrabold leading-tight mb-6 text-center text">
            <span className="text-purple-400 text-8xl">Costura</span> <span className="text-8xl">que transforma</span>
          </h1>
          {/* texto do parágrafo principal*/}
          <p className="text-4xl md:text-4xl text-gray-300 mb-6 text-center">
            Ajustes e consertos com excelência, cuidado e atenção aos detalhes.
          </p>

          {/* Texto com digitação */}
          <TypeAnimation
            sequence={[
              'Ajustou...',
              1500,
              'Experimentou...',
              1500,
              'Amou!',
              1500,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-center text-5xl text-purple-300 font-medium mb-8 h-[3rem]"
          />

          <a
            href="#contato"
            className="inline-block text-2xl bt-10 bg-purple-800 hover:bg-purple-400 text-white font-semibold px-8 py-3 rounded-xl transition-all mt-15"
          >
            Clique aqui e fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;