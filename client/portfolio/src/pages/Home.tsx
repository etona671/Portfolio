import AboutMe from "../sections/About"
import Hero from "../sections/Hero"
import Services from "../sections/Services"
import Skills from "../sections/Skills"
import Testimonials from "../sections/Testemonials"

const Home = () => {
  return (
    <main className="bg-[#0b0f1a] text-white">
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Testimonials />
    </main>
  )
}

export default Home
