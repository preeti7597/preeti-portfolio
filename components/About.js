import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="px-6 py-16 md:py-24 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed text-sm md:text-xl">
        I’m a Frontend Developer with 3 years of experience in React.js, Next.js, and modern UI frameworks. I specialize in building responsive, scalable web applications and turning Figma designs into pixel-perfect, user-friendly interfaces.
      </p>
    </motion.section>
  )
}
