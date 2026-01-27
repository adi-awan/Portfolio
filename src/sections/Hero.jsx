import profile from '../assets/profile.jpeg'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 px-6 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Image - Left */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={profile}
            alt="Adnan - Full Stack Web Developer"
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-xl border border-zinc-200"
          />
        </motion.div>

        {/* Text Content - Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-500">
            Full-Stack Web Developer
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-zinc-900">
            Building modern & scalable <br className="hidden sm:block" />
            web applications
          </h1>

          <p className="mt-5 max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">
            I’m Adnan, a full-stack web developer with a strong foundation in software
            engineering, focused on building modern, performant, and scalable web
            applications. I specialize in crafting clean user interfaces with React
            while developing reliable back-end systems using modern web technologies.
            I value clean code, thoughtful architecture, and delivering solutions that
            balance user experience with technical excellence.
          </p>

          <motion.div
            className="mt-7 flex flex-wrap gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
