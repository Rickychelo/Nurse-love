export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">

      <div
        className="
          absolute
          top-[-20%]
          left-[-10%]
          w-175
          h-175
          bg-pink-500/10
          blur-[140px]
          rounded-full
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-175
          h-175
          bg-fuchsia-500/10
          blur-[140px]
          rounded-full
          animate-pulse
        "
      />

    </div>
  );
}