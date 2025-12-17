import { useState } from "react"
import { Menu, X, Home, User, Briefcase, Layers, Mail } from "lucide-react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Accueil", icon: <Home size={18} />, href: "#home" },
    { name: "À propos", icon: <User size={18} />, href: "#about" },
    { name: "Compétences", icon: <Layers size={18} />, href: "#skills" },
    { name: "Portfolio", icon: <Briefcase size={18} />, href: "#portfolio" },
    { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0f1a]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
            Et
          </span>
          <h1 className="text-white font-semibold text-sm">
            Etona<span className="text-orange-500">.</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium hover:scale-105 transition"
        >
          Let’s Talk
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0b0f1a] border-t border-white/10">
          <ul className="flex flex-col p-6 space-y-5 text-gray-300">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 hover:text-orange-500"
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center"
            >
              Let’s Talk
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
