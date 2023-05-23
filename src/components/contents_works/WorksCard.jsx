import React from "react";

const WorksCard = (props) => {
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white lg:w-96 md:w-64 sm:w-96 sm:min-w-96">
        <div
          href="#"
          className="group relative block overflow-hidden bg-gray-100"
        >
          <img
            src={props.imgPath}
            loading="lazy"
            alt="Photo by Minh Pham"
            className="h-48 md:h-64 w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="text-blue-400 text-lg font-semibold overflow-hidden h-14">
            {props.title}
          </h2>

          <p className="mb-8 text-gray-500">{props.comment}</p>
        </div>
      </div>
    </>
  );
};

export default WorksCard;

