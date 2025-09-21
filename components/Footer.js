import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-16 text-gray-600 dark:text-gray-400"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <p>© 2025 Preeti. All rights reserved.</p>

          {/* Right Side */}
          <div className="flex gap-4">
            {/* Email Icon */}
            <a
              href="mailto:preetibaskandi.mca@gmail.com"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 0v.01L12 13 22 4.01V4H2zm0 2.382V20h20V6.382l-10 8.618-10-8.618z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/preetibaskandi0987/"
              target="_blank"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.6h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.61z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Optional tagline */}
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-500 text-center">
          Your visit means a lot, thank you! 🌸
        </p>
      </div>
    </footer>
  );
}
