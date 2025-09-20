"use client";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="px-4 sm:px-16 py-12 md:py-20 bg-blue-50 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get in Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10 text-sm md:text-base max-w-3xl mx-auto">
          I’m open to opportunities and collaborations. Feel free to reach out
          via email or LinkedIn.
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:preetibaskandi.mca@gmail.com"
            className="relative flex  sm:flex-row items-center sm:items-center sm:gap-4 gap-4 sm:p-6 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition transform w-full"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 0v.01L12 13 22 4.01V4H2zm0 2.382V20h20V6.382l-10 8.618-10-8.618z" />
            </svg>

            {/* Text */}
            <div className="flex-1 min-w-0 flex flex-col sm:text-left">
              <span className="text-gray-400 dark:text-gray-300 text-sm">
                Email
              </span>
              <p className="font-semibold text-black dark:text-white text-sm break-words">
                preetibaskandi.mca@gmail.com
              </p>
            </div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute right-4 text-gray-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l-1.41 1.41L17.17 10H4v2h13.17l-6.58 6.59L12 22l10-10z" />
            </svg>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/preetibaskandi0987/"
            target="_blank"
            className="relative flex sm:flex-row items-center sm:items-center sm:gap-4 gap-4 sm:p-6 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition transform w-full"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-700 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.6h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.61z" />
            </svg>

            {/* Text */}
            <div className="flex-1 min-w-0 flex flex-col sm:text-left">
              <span className="text-gray-400 dark:text-gray-300 text-sm">
                LinkedIn
              </span>
              <p className="font-semibold text-black dark:text-white text-sm break-words">
                linkedin.com/in/preetibaskandi0987
              </p>
            </div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute right-4 text-gray-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l-1.41 1.41L17.17 10H4v2h13.17l-6.58 6.59L12 22l10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
