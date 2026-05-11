import { motion } from "framer-motion";

export default function AuroraBackground() {

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* AURORA 1 */}
      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-10%]
          left-[-10%]
          w-[700px]
          h-[700px]
          bg-pink-500/20
          rounded-full
          blur-[140px]
        "
      />

      {/* AURORA 2 */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-[800px]
          h-[800px]
          bg-fuchsia-500/20
          rounded-full
          blur-[160px]
        "
      />

      {/* AURORA 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[30%]
          left-[35%]
          w-[500px]
          h-[500px]
          bg-purple-500/10
          rounded-full
          blur-[120px]
        "
      />

    </div>
  );
}