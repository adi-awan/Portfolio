import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Adnan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/adi-awan" className="hover:text-white transition" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-adnan-00b22a334/" className="hover:text-white transition" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://wa.me/923315698418" className="hover:text-white transition" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
