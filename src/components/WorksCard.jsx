import React from "react";

const WorksCard = (props) => {
  return (
    <div className="shadow-lg rounded-sm hover:shadow-2xl ring-1 hover:ring-4 hover:-translate-y-3 duration-200 md:h-full bg-gray-50">
      <div className="object-contain md:h-60">
        <img className="" src={props.imgPath} alt="" />
      </div>
      <div className="bg-gray-50 p-6">
        <div className="flex items-center">
          <h2 className="text-blue-400 text-lg font-semibold h-10">
            {props.title}
          </h2>
        </div>
        <div className="h-10 md:h-6 mb-4">
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
