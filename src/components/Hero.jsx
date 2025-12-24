import HeroImage from "../assets/hero.avif";

function Hero() {
  return (
    <section className="w-full h-auto max-md:mt-12 relative font-[ubuntu]">
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full h-screen max-md:h-auto object-cover"
      />

      {/* overlay */}
      <div
        className="absolute bg-gradient-to-r from-black/60 via-black/30 to-transparent
 top-0 inset-0"
      >
        <div className="absolute top-1/2 px-8 text-white">
          <p className="text-2xl max-md:text-sm">JUST IN</p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold">
            NIKE AIR MAX
          </h1>
          <p className="max-md:text-xs">
            Step into comfort and style with our latest collection
          </p>

          <div className="space-x-4 max-md:hidden">
            <button className="bg-white rounded-md px-4 py-2 text-black mt-4 cursor-pointer hover:bg-white/90 transition">
              Shop Now
            </button>

            <button className="bg-white rounded-md px-4 py-2 text-black mt-4 cursor-pointer hover:bg-white/90 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
