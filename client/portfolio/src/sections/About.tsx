const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          About <span className="text-orange-500">Me</span>
        </h2>

        <p className="mt-6 text-gray-400 text-justify">
          Je suis un développeur full-stack passionné par la création d'applications web élégantes,
          le design UI/UX et les plateformes numériques modernes.
        </p>

        <div className="mt-8">
          <a
            href="/cv.pdf"
            className="inline-block px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
