import React from "react";

const Skills = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div className="text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            SKILL
          </h1>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                2.7K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                1.8K
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                35
              </h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                4
              </h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
