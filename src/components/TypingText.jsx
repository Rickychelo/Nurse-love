import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Gracias por sanar corazones ❤️",
        2000,
        "Gracias por cuidar vidas ✨",
        2000,
        "Gracias por ser como eres 💖",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="
        text-pink-300
        text-lg
        md:text-2xl
        font-medium
      "
    />
  );
}