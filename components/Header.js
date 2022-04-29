export default function Header() {
  
  return (
    <>
      
      <header className="bg-gray-800 text-gray-100 body-font shadow-sm">
        <div className="container mx-auto relative flex justify-between sm:justify-center items-center py-4 px-5">
          <span className="md:hidden sm:absolute left-5 md:static">
            <button
              className="relative block w-8 h-8 border border-none outline-none focus:outline-none transition-all duration-500 transform false"
              aria-label="Menu icon"
            >
              <div className="relative h-1">
                <span
                  className="absolute top-0 left-1/2 block w-full h-1 bg-gradient-to-br from-green-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 delay-500 -translate-y-2.5 opacity-100"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute top-0 left-0 block w-full h-1 bg-gradient-to-br from-green-500 to-blue-500"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute bottom-0 left-0 block w-full h-1 bg-gradient-to-br from-green-500 to-blue-500 transition-all duration-300 transform  false"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute bottom-0 left-1/2 block w-full h-1 bg-gradient-to-br from-green-500 to-blue-500 transition-all delay-50 duration-300 transform -translate-x-1/2 delay-500 translate-y-2.5 opacity-100"
                  aria-hidden="true"
                ></span>
              </div>
            </button>
          </span>
          <nav className="hidden md:flex flex-wrap items-center md:justify-start text-sm font-semibold tracking-wider">
            <a href="/pricing">
              <span className="group relative inline-block mr-5 outline-none no-underline text-gray-400 text-sm font-semibold tracking-wide focus:outline-none p-2.5 transition-all duration-300 transform hover:text-gray-100">
                <span
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-hidden="true"
                >
                </span>
                
                Pricing &amp; FAQ
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-hidden="true"
                ></span>
              </span>
            </a>
          </nav>
          <a
            aria-current="page"
            className="sm:mr-12 ml-4 flex flex-shrink-0 justify-center font-medium items-center text-gray-900 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-2xl text-white font-semibold antialiased tracking-wide uppercase">
              <span className="text-3xl  text-transparent md:text-3xl bg-clip-text bg-gradient-to-br from-red-700  to-yellow-400">F</span>
              <span className="text-2xl  text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-red-700  to-yellow-400">ancy</span>
              <span className="text-3x text-transparent md:text-3xl bg-clip-text bg-gradient-to-tl from-blue-400  to-green-500"> T</span>
              <span className="text-2xl text-transparent md:text-2xl bg-clip-text bg-gradient-to-tl from-blue-400  to-green-500">ailwind</span>
            </span>
          </a>
          <nav className="hidden md:flex flex-wrap items-center md:justify-start text-sm font-semibold tracking-wider">
            <a href="/browse-components">
              <span className="group relative inline-block mr-5 outline-none no-underline text-gray-400 text-sm font-semibold tracking-wide focus:outline-none p-2.5 transition-all duration-300 transform hover:text-gray-100">
                <span
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-hidden="true"
                ></span>
                Browse components
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-hidden="true"
                ></span>
              </span>
            </a>
          </nav>
          <div className="hidden absolute right-5 sm:flex ml-auto md:ml-0 mr-4 md:mr-0 justify-end">
            <a
              className="group px-2 inline-flex items-center bg-gradient-to-br from-gray-100 to-gray-100 bg-clip-text text-transparent text-sm transition-all duration-100 transform hover:from-green-500 hover:to-blue-500 hover:scale-105"
              href="/app/login"
            >
              Sign in{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="self-end ml-2 w-4 text-gray-100 group-hover:text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
            </a>
          </div>
        </div>


      </header>
      </>
  );
}
