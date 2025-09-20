// import { motion } from "framer-motion";
// import Chip from "@mui/material/Chip";

// export default function Skills() {
//   const skills = [
//     "React.js",
//     "Next.js",
//     "Redux Toolkit",
//     "Tailwind CSS",
//     "Material UI",
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Webflow",
//     "Performance optimization",
//     "Figma",
//     "Git",
//     "JIRA",
//   ];
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       className="p-8 md:p-16"
//     >
//       <h2 className="text-3xl font-bold mb-6">Skills</h2>
//       <div className="flex flex-wrap gap-3">
//         {skills.map((skill, i) => (
//           <Chip key={i} label={skill} color="primary" variant="outlined" />
//         ))}
//       </div>
//     </motion.section>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "JavaScript",
    "HTML",
    "CSS",
    "Webflow",
    "Performance Optimization",
    "Figma",
    "Git",
    "JIRA",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="p-8 md:p-16"
    >
      <div className="max-w-6xl mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg cursor-pointer text-white font-medium transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(${
                  index * 30
                }, 70%, 50%), hsl(${index * 30 + 50}, 70%, 60%))`,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
