import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Hero content */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52"
          >
            <Image
              src="/college-pic.jpg"
              alt="Profile"
              width={208}
              height={208}
              className="rounded-full object-cover w-full h-full"
            />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col text-center md:text-left gap-2"
          >
            <p className="text-lg text-gray-800 font-bold">Hi!!, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5b3a2e] leading-tight">
              Preeti Baskandi
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 font-bold">
              Frontend Developer
            </p>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0">
              Creating user-focused digital experiences that work beautifully
              everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
