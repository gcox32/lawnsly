export default function Hero() {
  return (
    <section className="relative flex justify-center items-center h-[90vh] text-white">
      {/* Background Video */}
      <video
        className="z-0 absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/sprout-loop.mp4" type="video/mp4" />
        {/* Optionally: fallback content */}
      </video>

      {/* Brand Tint Overlay */}
      <div className="z-10 absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />

      {/* Foreground Content */}
      <div className="z-20 relative px-4 max-w-2xl text-center">
        <h1 className="drop-shadow-md mb-6 font-heading text-5xl md:text-6xl">
          Lawnsly
        </h1>
        <p className="drop-shadow-sm mb-8 text-neutral-200 text-xl md:text-2xl">
          Redeem the ground.
        </p>
        <button className="bg-brand-accent px-6 py-3 rounded-4xl font-semibold text-black transition hover:bg-brand-accent-dark cursor-pointer">
          get the app
        </button>
      </div>
    </section>
  );
}
