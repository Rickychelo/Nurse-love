import { motion } from "framer-motion";

export default function AuroraBackground() {

  return (

    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">

      {/* AURORA 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="
          absolute
          top-[-10%]
          left-[-10%]
          w-[500px]
          h-[500px]
          bg-pink-500/20
          blur-3xl
          rounded-full
        "
      />

      {/* AURORA 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
        }}
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          w-[500px]
          h-[500px]
          bg-fuchsia-500/20
          blur-3xl
          rounded-full
        "
      />

      {/* AURORA 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
        }}
        className="
          absolute
          top-[30%]
          left-[35%]
          w-[400px]
          h-[400px]
          bg-rose-500/10
          blur-3xl
          rounded-full
        "
      />

    </div>

  );
}