const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-200 text-[#0b0f1a] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          A propos de  <span className="text-orange-500">Moi</span>
        </h2>

        <p className="mt-6 text-gray-700 text-justify">
          Je suis un développeur full-stack passionné par la création d'applications web élégantes,
          le design UI/UX et les plateformes numériques modernes.
        </p>

        <div className="mt-8">
          <a
            href="/cv.pdf"
            className="inline-block px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition"
          >
            <span className="text-gray-200">Télécharger CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
