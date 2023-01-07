import React from 'react'

const Navbar = () => {
  return (
    <>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            herf="#"
          >
            {/* <span class="ml-3 text-5xl">
              Rayne<span className='text-pink-500'>Coder</span>
            </span> */}
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button class="inline-flex items-center bg-pink-600  text-white border-0 py-1 px-3 mr-5 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0">
              <a href="https://github.com/AmanDhimanD/" target="_blank">
                Projects
              </a>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>{" "}
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <a href="https://amandhim.bio.link/" target="_blank">Contact Me</a>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar