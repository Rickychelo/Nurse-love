import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-black
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* FONDO AURORA */}
          <div className="absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                w-[600px]
                h-[600px]
                bg-pink-500/30
                blur-3xl
                rounded-full
                top-[-200px]
                left-[-150px]
                animate-pulse
              "
            />

            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                bg-fuchsia-500/20
                blur-3xl
                rounded-full
                bottom-[-150px]
                right-[-100px]
                animate-pulse
              "
            />

          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 text-center px-6">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-white
              "
            >
              Cargando recuerdos ❤️
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="
                mt-6
                text-gray-300
                text-lg
              "
            >
              Preparando algo especial para ti ✨
            </motion.p>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-10">

              {[0, 1, 2].map((item) => (

                <motion.div
                  key={item}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: item * 0.2,
                  }}
                  className="
                    w-4
                    h-4
                    rounded-full
                    bg-pink-400
                  "
                />

              ))}

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}