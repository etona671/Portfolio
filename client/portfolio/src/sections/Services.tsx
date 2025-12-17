const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          My <span className="text-orange-500">Services</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {["UI/UX Design", "Web Development", "Mobile Apps"].map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-[#0e1322] hover:border-orange-500 border border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-400">
                High-quality solutions tailored to your business needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
