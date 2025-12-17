import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center font-bold">
              Et
            </span>
            <h2 className="text-lg font-semibold">
              Etona<span className="text-orange-500">.</span>
            </h2>
          </div>
          <p className="mt-4 text-sm">
            Créer des solutions numériques modernes qui aident les entreprises à se développer
            et à se démarquer en ligne.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-500">Accueil</a></li>
            <li><a href="#about" className="hover:text-orange-500">À propos</a></li>
            <li><a href="#skills" className="hover:text-orange-500">Compétences</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> etonabarkatchere671@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +241 74 42 49 11
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Libreville, Gabon
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Obtenez les dernières informations
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full px-4 py-2 bg-[#0e1322] rounded-l-lg outline-none text-sm"
            />
            <button
              className="px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition"
            >
              →
            </button>
          </form>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0e1322] hover:bg-orange-500 text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Etona. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
