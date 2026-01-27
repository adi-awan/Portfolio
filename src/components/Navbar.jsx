import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  // Detect scroll for navbar background
  useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY

    // If user is at the very top, highlight Home/hero
    if (scrollPos < 100) {
      setActiveSection("hero")
      return
    }

    setScrolled(scrollPos > 50)

    // Detect which section is active
    const sections = navLinks.map(link => document.querySelector(link.href))

    for (let sec of sections) {
      if (sec && scrollPos >= sec.offsetTop - 50) {
        setActiveSection(sec.id)
      }
    }
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])


  // Smooth scroll function
  // Inside Navbar.jsx

// Smooth scroll function
const handleClick = (href) => {
  if (href === "#hero") {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  } else {
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  setMobileOpen(false) // close mobile menu if open
}


  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
       {/* Logo */}
<div
  className="text-xl font-bold text-zinc-900 cursor-pointer"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActiveSection("hero") // Force highlight Home immediately
    setMobileOpen(false)
  }}
>
  Adnan
</div>


{/* Desktop Links */}
<ul className="hidden md:flex space-x-8">
  {navLinks.map((link, idx) => (
    <motion.li
      key={idx}
      whileHover={{ scale: 1.1 }}
      className={`cursor-pointer font-medium transition ${
        activeSection === link.href.slice(1)
          ? "text-blue-600"
          : "text-zinc-900 hover:text-blue-600"
      }`}
      onClick={() => handleClick(link.href)}
    >
      {link.name}
    </motion.li>
  ))}
</ul>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`cursor-pointer font-medium transition ${
                activeSection === link.href.slice(1)
                  ? "text-blue-600"
                  : "text-zinc-900 hover:text-blue-600"
              }`}
              onClick={() => handleClick(link.href)}
            >
              {link.name}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}
