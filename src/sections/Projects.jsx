import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {
  const allProjects = [
    {
      title: "Inventory Management System",
      description: "Full-stack system to manage inventory, billing, and ledger with React, Node.js & MongoDB.",
    },
    {
      title: "AI-Powered Workflow Automation Tool",
      description: "Automates repetitive tasks and workflows with intelligent automation architecture.",
    },
    {
      title: "Admin Analytics Dashboard",
      description: "Visualizes key metrics with charts and tables for data-driven decisions.",
    },
    {
      title: "Personal Portfolio",
      description: "Dynamic portfolio with projects, contact form, and Redux-powered state management.",
    },
    {
      title: "Business Process Optimizer Tool",
      description: "Models workflows and provides suggestions to improve efficiency and performance.",
    },
    {
      title: "API Integration Hub",
      description: "Centralizes multiple API endpoints into one dashboard for streamlined operations.",
    },
    {
      title: "E-Commerce / Inventory Lite System",
      description: "Handles orders, stock, and basic payment functionality using full-stack tech.",
    },
    {
      title: "AI Chatbot / Virtual Assistant Demo",
      description: "Showcases AI workflow automation and backend logic integration using Python & Node.js.",
    },
  ]

  const [showAll, setShowAll] = useState(false)
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6)

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsToShow.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl p-6 shadow-md border border-gray-200 cursor-pointer bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{project.title}</h3>
              <p className="text-zinc-600 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}
