import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {

  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="
        fixed
        inset-0
        bg-black
        flex
        items-center
        justify-center
        z-9999
      "
    >

      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
          className="text-6xl font-bold"
        >
          ❤️
        </motion.h1>

        <p className="mt-6 text-gray-300 text-xl">
          Cargando recuerdos...
        </p>

      </div>

    </motion.div>
  );
}