import React from "react";
import pic from '../assets/header.png'
import './style.css'

const Header = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex pl-20 px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="sm:text-4xl text-3xl mb-4 font-medium text-white header-shadow">
              <span className="text-7xl text-pink-600">
                {" "}
                A<span className="text-7xl text-white">ma</span>n Dh
                <span className="text-7xl text-white">i</span>man
              </span>
              <br class="hidden lg:inline-block" />
            </h1>

            <p class="mb-8 leading-relaxed font-large ">
              A Skilled Software Engineer 🚀 from India. Always working on some
              project or learning something new! Want to become a full-time
              Freelancer 💸 and an Open Source Contributor ❤️.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <a href="https://amandhim.bio.link/" target="_blank">About me </a>
              </button>
              <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 mr-5 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-white-700 hover:text-white rounded text-lg">
                <a href="#Projects">Projects</a>
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
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded custom-shadow"
              alt="hero"
              src={pic}
            />
          </div>
        </div>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Header;
