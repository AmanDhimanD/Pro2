import React from "react";
import edupic from "../assets/edcation.png";
import "./style.css";

const Education = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div className=" text-center uppercase title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Education Basic Qualification and Certifcations
        </div>
        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb object-cover object-center rounded custom-shadow"
            alt="hero"
            src={edupic}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class=" uppercase title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Krishna Institute of Engineering and Technology
            </h1>
            <h2 className="uppercase italic title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              - MASTER OF COMPUTER SCIENCE
            </h2>
            <p class="leading-relaxed mb-8">
              ⚡ I have studied basic software engineering subjects like DS,
              Algorithms, DBMS, OS, CA, AI etc. <br />⚡ Apart from this, I have
              done courses on Data Science, Cloud Computing and Full Stack
              Development. <br />⚡ I was selected for Merit cum Means
              Scholarship which is given to top 10% of students in college. I
              have received award from respected director for consistently best
              performance in academics.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-pink-500  border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <a href="https://www.kiet.edu/" target="_blank">
                  Visit
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
