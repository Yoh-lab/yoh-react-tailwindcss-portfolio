import React from "react";
import About from "./About";

const AboutCard = (props) => {
  return (
    <>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div class="group relative block h-52 overflow-hidden bg-gray-100 md:h-44">
          <img
            src={props.thumbnail}
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div class="flex flex-1 flex-col p-2 sm:p-2">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <h1
              href="#"
              class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {props.title}
            </h1>
          </h2>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
