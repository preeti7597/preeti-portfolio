"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      subtitle: "Crete Professional Alliance",
      img: "/crete.png",
      link: "https://www.cretepa.com",
      description:
        "A professional network website built with ReactJS, Redux, and TailwindCSS. Showcases accounting, tax, and advisory services with a modern, responsive design and partner/member firm integration.",
    },
    {
      id: 2,
      subtitle: "Pinkishe Foundation",
      img: "/pinkishe.png",
      link: "https://pinkishe.org",
      description:
        "Pinkishe Foundation – A ReactJS and TailwindCSS-based NGO platform promoting menstrual health and hygiene. Provides free sanitary products, education, and eco-friendly solutions to empower women and communities.",
    },
    {
      id: 3,
      subtitle: "Uniinsider",
      img: "/uniinsider.png",
      link: "https://staging.uniinsiders.com/",
      description:
        "A platform providing insights into education and career options, including rankings, exams, scholarships, placements, and reviews. Built with React, Next.js, Redux, and Material-UI.",
    },
    {
      id: 4,
      subtitle: "The Care Connexion",
      img: "/care.png",
      link: "https://www.thecareconnexion.com/",
      description:
        "A platform that streamlines how home healthcare agencies secure and manage a mobile workforce. Built using React.js, Material UI, CSS.",
    },
    {
      id: 5,
      subtitle: "ZBS Partners",
      img: "/zbs.png",
      link: "https://www.zbspartners.com/",
      description:
        "A private equity platform focused on scaling and consolidating fragmented service businesses across the U.S. Built using React, TailwindCSS.",
    },
    {
      id: 6,
      subtitle: "Shield Technology Partners",
      img: "/shield.png",
      link: "https://shieldtp.com/",
      description:
        "A private equity platform transforming managed service providers into AI-powered, scalable businesses. Built using React.js, Tailwind CSS, Material-UI.",
    },
    {
      id: 7,
      subtitle: "Luxeporter",
      img: "/luxporter.png",
      link: "https://luxaporter.com/",
      description:
        "A company offering high-quality interior and entrance doors, with custom carpentry and a variety of styles. Built using React, Next.js, Redux, and Material-UI.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="Projects"
      className="px-6 md:px-16 py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
          🚀 My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-lg overflow-hidden cursor-pointer h-64"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full flex items-center justify-center overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.subtitle}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Text */}
              <div className="px-4 py-3 bg-white/70 backdrop-blur-md absolute bottom-0 w-full">
                <p className="text-lg font-bold text-gray-900">
                  {project.subtitle}
                </p>
                {/* <p className="text-xs text-gray-600">Click to view details</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
              >
                ✕
              </button>

              {/* Project Image */}
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.subtitle}
                  fill
                  className=""
                />
              </div>

              {/* Title + Link */}
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.subtitle}
                </h3>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-sm px-3 py-1 rounded bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 text-gray-900 hover:opacity-80 transition border border-gray-300"
                >
                  Visit ↗
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
