import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "Custom Web Application Development",
    "Business Automation & Digital Transformation",
    "Inventory, Billing & Ledger Systems",
    "CRM & ERP-Lite Solutions",
    "Performance Optimization & Maintainable Code",
    "Database Architecture & Optimization",
    "Scalable System Design",
    "Admin Dashboards & Reporting Systems",
    "HTML, CSS, JavaScript, React, Node.js, MongoDB, Python",
    "API Integration & Backend Logic",
  ]

  const colors = [
    "bg-indigo-50 text-indigo-700",
    "bg-green-50 text-green-700",
    "bg-teal-50 text-teal-700",
    "bg-rose-50 text-rose-700",
    "bg-orange-50 text-orange-700",
    "bg-purple-50 text-purple-700",
    "bg-sky-50 text-sky-700",
    "bg-fuchsia-50 text-fuchsia-700",
    "bg-amber-50 text-amber-700",
    "bg-cyan-50 text-cyan-700",
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className={`rounded-lg p-6 shadow-md border border-zinc-200 hover:scale-105 transition-transform duration-300 cursor-pointer ${colors[idx % colors.length]}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
