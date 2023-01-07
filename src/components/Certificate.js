import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

const Certificate = () => {
  return (
    <>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Achievments and Certificates
              </h1>
              <div class="h-1 w-20 bg-pink-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={c1}
                  alt="certification"
                />
                <h3 class="tracking-widest text-pink-400 text-xs font-medium title-font">
                  UCSanDiego
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  BIG DATA
                </h2>
                <p class="leading-relaxed text-base">
                  {/* I did complete Big Data certification under the great mentors.
                  A great opportunity to develop the product with Big Data. */}
                </p>
                <button class="mt-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/K6YXP6Q55B9E"
                    target="_blank"
                  >
                    View{" "}
                  </a>
                </button>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={c2}
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-400 text-xs font-medium title-font">
                  JOHNS HOPKINS UNIVERSITY
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  HTML, CSS and JAVASCRIPT FOR WEB DEVELOPERS
                </h2>
                <p class="leading-relaxed text-base"></p>
                <button class="mt-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  <a
                    href="https://coursera.org/share/0823c4c98f7320dbde65253c7c249c95"
                    target="_blank"
                  >
                    View{" "}
                  </a>
                </button>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={c4}
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-400 text-xs font-medium title-font">
                  Eduonix Learning Solutions
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Python Mastering with NumPy for Data Science & Machine
                  Learning
                </h2>
                <p class="leading-relaxed text-base">
                  {/*  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche. */}
                </p>
                <button class="mt-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  <a
                    href="https://drive.google.com/file/d/1ZcMVk-OKyY2MMDfFvpwW7TXztduI4WLN/view?usp=sharing"
                    target="_blank"
                  >
                    View{" "}
                  </a>
                </button>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={c3}
                  alt="content"
                />
                <h3 class="tracking-widest text-pink-400 text-xs font-medium title-font">
                  Great Learning Academy
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  C++ 
                </h2>
                <p class="leading-relaxed text-base">
                  {/* Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche. */}
                  {/* C++,Data Structure and Algorithm & OOPS */}
                </p>
                <button class="mt-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  <a
                    href="https://drive.google.com/file/d/19nHIgHV3WijhKv3VNO58k3qE1EdrAYFr/view?usp=sharing"
                    target="_blank"
                  >
                    View{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
