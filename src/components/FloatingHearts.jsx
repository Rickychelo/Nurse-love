import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 });

export default function FloatingHearts() {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {hearts.map((_, index) => (

        <motion.div
          key={index}
          initial={{
            y: "110vh",
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.7],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="
            absolute
            text-pink-400/30
            text-2xl
            md:text-4xl
          "
        >
          ❤️
        </motion.div>

      ))}

    </div>
  );
}