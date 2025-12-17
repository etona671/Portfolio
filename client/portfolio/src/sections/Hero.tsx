const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm">
            👋 Bonjour, je suis
          </span>

          <h2 className="text-4xl md:text-3xl font-bold leading-tight">
            <span className="text-orange-500">Etona</span> BARKA TCHERE
          </h2>

          <p className="mt-4 text-gray-400 max-w-lg text-justify">
            Je crée des sites web modernes et des solutions numériques qui laissent une impression durable auprès des entreprises 
            et des particuliers.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-700 to-pink-700 hover:scale-105 transition"
            >
              <span className="text-white">Mes réalisations</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-orange-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 blur-3xl absolute"></div>
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="relative w-64 h-64 rounded-full object-cover border-4 border-[#0b0f1a]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
