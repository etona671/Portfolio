const Testimonials = () => {
  return (
    <section className="py-20 bg-[#fff] text-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          What My <span className="text-orange-500">Clients Say</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#0b0f1a] p-6 rounded-xl border border-white/10"
            >
              <p className="text-gray-400">
                “Amazing work, very professional and fast delivery.”
              </p>
              <h4 className="mt-4 font-semibold">Client Name</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
