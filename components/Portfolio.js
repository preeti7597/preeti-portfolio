"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crete Professional Alliance",
      subtitle: "Crete Professional Alliance",
      img: "/crete.png",
      link: "https://www.cretepa.com",
      description:
        "A professional network website built with ReactJS, Redux, and TailwindCSS. Showcases accounting, tax, and advisory services with a modern, responsive design and partner/member firm integration.",
    },
    {
      id: 2,
      title: "Pinkishe Foundation",
      subtitle: "Pinkishe Foundation",
      img: "/pinkishe.png",
      link: "https://pinkishe.org",
      description:
        "Pinkishe Foundation – A ReactJS and TailwindCSS-based NGO platform promoting menstrual health and hygiene. Provides free sanitary products, education, and eco-friendly solutions to empower women and communities.",
    },
    {
      id: 3,
      title: "Uniinsider",
      subtitle: "Uniinsider",
      img: "/uniinsider.png",
      link: "https://staging.uniinsiders.com/",
      description:
        "A platform providing insights into education and career options, including rankings, exams, scholarships, placements, and reviews. Built with React, Next.js, Redux, and Material-UI.",
    },
    {
      id: 4,
      title: "The Care Connexion",
      subtitle: "The Care Connexion",
      img: "/care.png",
      link: "https://www.thecareconnexion.com/",
      description:
        "A platform that streamlines how home healthcare agencies secure and manage a mobile workforce. It connects agencies directly with vetted healthcare professionals, enabling them to extend their coverage area and capture referrals without compromising HIPAA compliance. Built using React.js, Material UI, Css",
    },
    {
      id: 5,
      title: "ZBS Partners",
      subtitle: "ZBS Partners",
      img: "/zbs.png",
      link: "https://www.zbspartners.com/",

      description:
        "A private equity platform focused on scaling and consolidating fragmented service businesses across the U.S. It emphasizes flexible capital and hands-on involvement to drive growth and operational improvement. Built using React, TailwindCSS",
    },
    {
      id: 6,
      title: "Shield Technology Partners",
      subtitle: "Shield Technology Partners",
      img: "/shield.png",
      link: "https://shieldtp.com/",
      description:
        "A private equity platform transforming managed service providers into AI-powered, scalable businesses. It combines local leadership autonomy with centralized expertise and resources. AI engineers are embedded to design tools that solve problems and create opportunities. Built using React.js, Tailwind CSS, Material-UI.",
    },
    {
      id: 7,
      title: "Luxeporter",
      subtitle: "Luxeporter",
      img: "/luxporter.png",
      link: "https://luxaporter.com/",
      description:
        "A company offering high-quality interior and entrance doors, including fire-rated and aluminum options, with custom carpentry and a variety of styles. Built using React, Next.js, Redux, and Material-UI.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="Projects"
      className="px-6 md:px-16 py-16 md:py-16 mx-auto bg-blue-50"
    >
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 hover:shadow-xl transition transform"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-contain rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-gray-400 dark:text-gray-300 uppercase text-xs">
                {project.subtitle}
              </span>
              <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">
                {project.title}
              </p>
              <div className="flex mt-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1 rounded text-xs bg-blue-7 dark:bg-blue-700 text-white dark:text-gray-200 bg-gray-300 dark:hover:bg-white-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-1 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                ✕
              </button>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />
              <div className="flex">
                <h3 className="text-lg font-bold text-black dark:text-white truncate block capitalize">
                  {selectedProject.title}
                </h3>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer mt-1 ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-white hover:bg-blue-600 transition"
                >
                  ↗
                </a>
              </div>
              <p className="text-sm md:text-sm text-gray-600 max-w-md mx-auto md:mx-0 font-base">
                {selectedProject.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
