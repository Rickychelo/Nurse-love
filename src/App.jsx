
import Loader from "./components/Loader";
import AuroraBackground from "./components/AuroraBackground";
import TypingText from "./components/TypingText";
import LoveReasons from "./components/LoveReasons";
import LoveLetter from "./components/LoveLetter";
import Counter from "./components/Counter";
import PremiumGallery from "./components/PremiumGallery";

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* Loader */}
      <Loader />

      {/* Aurora Background */}
      <AuroraBackground />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div
          className="
            w-full
            max-w-5xl
            mx-auto
            text-center
            backdrop-blur-3xl
            bg-white/2
            border border-white/5
            rounded-[40px]
            px-8
            py-20
            md:px-20
            shadow-[0_0_80px_rgba(255,255,255,0.03)]
          "
        >

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-pink-300
              text-xs
              md:text-sm
              mb-8
            "
          >
            Feliz Día de la Enfermera
          </p>

          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-bold
              leading-[1.05]
              tracking-tight
            "
          >
            Para la mujer
            <br />
            más increíble ❤️
          </h1>

          <div className="mt-10">
            <TypingText />
          </div>

          <p
            className="
              mt-10
              text-gray-300
              text-lg
              md:text-2xl
              leading-9
              max-w-3xl
              mx-auto
            "
          >
            Gracias por dedicar tu vida a cuidar,
            sanar y brindar amor a quienes más lo necesitan.
            Tu vocación hace del mundo un lugar mucho más humano.
          </p>

        </div>

      </section>

      {/* RAZONES */}
      <LoveReasons />
<br /><br />
      {/* COUNTER */}
      <Counter />
<br /><br />
      {/* GALERÍA */}
      <PremiumGallery />
<br /><br />
      {/* CARTA EXPANDIBLE */}
      <LoveLetter />
<br /><br />
      {/* CARTA FINAL */}
      <section className="relative z-10 py-52 px-6">
<br /><br />
        <div
          className="
            max-w-5xl
            mx-auto
            backdrop-blur-3xl
            bg-white/2
            border border-white/5
            rounded-[40px]
            p-10
            md:p-16
            text-center
            shadow-[0_0_80px_rgba(255,255,255,0.02)]
          "
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            Feliz Día de la Enfermera ❤️
          </h2>

          <p className="text-gray-300 text-lg md:text-2xl leading-10">

            Gracias por ser una mujer tan fuerte,
            inteligente, noble y especial.

            <br /><br />

            Estoy orgulloso de ti y de todo lo que haces cada día.

            <br /><br />

            Nunca olvides lo increíble que eres.

          </p>

          <p className="mt-16 text-3xl text-pink-300">
            Con mucho amor ❤️
            <br />  
            Tu Ricky que te Ama Mucho❤️
          </p>
 <br />   <br />  
        </div>

      </section>

    </div>
  );
}