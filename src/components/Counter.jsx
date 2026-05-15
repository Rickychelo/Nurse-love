export default function Counter() {

  const startDate = new Date("2022-10-15");
  const today = new Date();

  const diffTime = Math.abs(today - startDate);
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <section className="relative z-10 py-44 px-6 text-center">

      <h2 className="text-4xl md:text-6xl font-bold mb-10">
        {days} días admirándote ❤️
      </h2>

      <p className="text-gray-400 text-lg md:text-2xl">
        Y cada día me haces sentir más orgulloso de ti.
      </p>

    </section>
  );
}