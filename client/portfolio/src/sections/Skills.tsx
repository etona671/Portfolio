const skills = [
  { name: "React", level: "50%" },
  { name: "Node.js", level: "50%" },
  { name: "UI/UX Design", level: "45%" },
  { name: "Tailwind CSS", level: "55%" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#fff] text-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Mes <span className="text-orange-500">Competences</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6 text-white">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#0b0f1a] p-6 rounded-xl border border-white/10"
            >
              <h4 className="mb-2">{skill.name}</h4>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 mt-2 inline-block">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
