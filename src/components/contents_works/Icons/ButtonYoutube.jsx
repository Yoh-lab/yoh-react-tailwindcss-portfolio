import React from "react";
import IconButton from "../../IconButton";

const ButtonYoutube = (props) => {
  return (
    <IconButton
      iconImg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-youtube"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
          <path d="M10 9l5 3l-5 3z" />
        </svg>
      }
      link={props.link}
    />
  );
};

export default ButtonYoutube;
