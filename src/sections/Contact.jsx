import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID"
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS success:", result.text)
          setSent(true)
          setError(false)
          form.current.reset()
          setTimeout(() => setSent(false), 5000)
        },
        (err) => {
          console.error("EmailJS error:", err.text)
          setError(true)
          setSent(false)
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10 text-center">
          Contact Me
        </h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-50 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mt-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="cursor-pointer mt-6 px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {sent && (
            <motion.p
              className="text-green-600 mt-4 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.p>
          )}

          {error && (
            <motion.p
              className="text-red-600 mt-4 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>

        <p className="text-center text-gray-600 mt-6">
          Or email me directly at{" "}
          <span className="font-medium text-zinc-900">
            <a
              href="mailto:adii.awan@outlook.com"
              className="hover:underline hover:text-blue-600 transition"
            >
              adii.awan@outlook.com
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}
