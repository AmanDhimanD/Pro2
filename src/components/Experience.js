import React from "react";
import expic1 from "../assets/ex1.png";
import expic2 from "../assets/ex2.png";

const Experience = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-5xl font-medium title-font mb-4 text-white tracking-widest">
              Experience
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl italic">
                {" "}
                Work, Internship and Volunteership{" "}
              </p>
              <br />I have worked on freelancing Project and Successfully
              deliver the Project in PHP,MySQL, Python, ReactJS,NextJS and more
              technologyies.I love organising events and that is why I am also
              involved with many opensource communities as a representative.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-60 h-18 object-cover object-center sm:mb-0 mb-4"
                  src={expic1}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-white">
                    The Unify Cloud LLC
                  </h2>
                  <h3 class="text-gray-500 mb-3">
                    Software Developer Engineer <br />
                    Work as a SDE  -  <span className="font-bold">PRESENT</span>
                  </h3>
                  <p class="mb-4">
                    Manage the Azure Cloud Pricing using C#, ASP .NET CORE and
                    maintain the Assesment Reports.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-60 h-18 object-cover object-center sm:mb-0 mb-4"
                  src={expic2}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-white">
                    Freelancer
                  </h2>
                  <h3 class="text-gray-500 mb-3">
                   
                    Work on the requirment
                  </h3>
                  <p class="mb-4">
                    Get the project online from the clients and develop the
                    required work objects. Previous Work on - Excel, ReactJS for
                    Web App, PHP Projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
