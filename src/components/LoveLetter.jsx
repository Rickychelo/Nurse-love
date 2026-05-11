import { useState } from "react";
import { motion } from "framer-motion";

export default function LoveLetter() {

  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-44 px-6">

      <div className="text-center">

        <button
          onClick={() => setOpen(!open)}
          className="
            px-10
            py-4
            rounded-full
            bg-linear-to-r
            from-pink-500
            to-fuchsia-500
            text-lg
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-2xl
          "
        >
          {open ? "Cerrar carta ❤️" : "Leer carta ❤️"}
        </button>

      </div>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            max-w-4xl
            mx-auto
            mt-16
            backdrop-blur-3xl
            bg-white/2
            border border-white/5
            rounded-[40px]
            p-10
            md:p-16
            shadow-[0_0_60px_rgba(255,255,255,0.03)]
          "
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Para ti ❤️
          </h2>

          <p className="
            text-gray-300
            text-lg
            md:text-2xl
            leading-10
          ">

            Gracias por ser una mujer tan increíble.

            <br /><br />

            Admiro profundamente la pasión con la que ayudas a las personas,
            la dulzura con la que tratas a quienes te rodean y la fuerza
            que tienes incluso en los días difíciles.

            <br /><br />

            Estoy orgulloso de todo lo que eres y todo lo que lograrás.

            <br /><br />

            Nunca dudes de lo especial que eres para mí ❤️

          </p>

        </motion.div>

      )}

    </section>
  );
}