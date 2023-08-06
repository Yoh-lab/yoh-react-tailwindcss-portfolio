import React from "react";

const WorksCard = (props) => {
  return (
    <div>
      <div className="flex flex-col  p-1 rounded-lg">
      {/* <div className="group relative block h-52 overflow-hidden bg-gray-100 md:h-44"> */}
        <div className="group overflow-hidden rounded-lg">
          <img
            src={props.thumbnail}
            loading="lazy"
            className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>
        <h1 className="code text-amber-600 font-bold text-xl text-left ml-2 mt-2  hover:text-amber-800 active:text-amber-900">
          {props.title}
        </h1>
        <h1 className="code text-gray-700 font-bold text-left ml-2 mb-2">{props.english_title}</h1>
      </div>
    </div>
  );
};

export default WorksCard;