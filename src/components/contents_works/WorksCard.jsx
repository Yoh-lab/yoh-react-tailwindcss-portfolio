import React from "react";

const WorksCard = (props) => {
  return (
    <>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div
          href="#"
          class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <img
            src={props.imgPath}
            loading="lazy"
            alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="text-blue-400 text-lg font-semibold h-10">
            {props.title}
          </h2>

          <p class="mb-8 text-gray-500">{props.comment}</p>
        </div>
      </div>
    </>
  );
};

export default WorksCard;
