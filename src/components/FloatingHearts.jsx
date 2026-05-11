import { motion } from "framer-motion";

export default function FloatingHearts() {

  const hearts = Array.from({ length: 20 });

  return (

    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {hearts.map((_, index) => (

        <motion.div
          key={index}
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="
            absolute
            text-pink-400
            text-2xl
          "
        >
          ❤️
        </motion.div>

      ))}

    </div>

  );
}