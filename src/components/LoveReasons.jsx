import { motion } from "framer-motion";

const reasons = [
  "Tu empatía ❤️",
  "Tu inteligencia ✨",
  "Tu nobleza 💖",
  "Tu paciencia 🌸",
  "Tu sonrisa 😊",
  "Tu dedicación 👩‍⚕️",
];

export default function LoveReasons() {
  return (
    <section className="relative z-10 py-44 px-6">

      <h2 className="text-4xl md:text-6xl font-bold text-center mb-24">
        Razones por las que te admiro 💕
      </h2>
<br /><br />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {reasons.map((reason, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="
              backdrop-blur-3xl
              bg-white/2
              border border-white/5
              rounded-3xl
              p-8
              text-center
              shadow-[0_0_40px_rgba(255,255,255,0.02)]
            "
          >

            <p className="text-xl text-gray-200">
              {reason}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}