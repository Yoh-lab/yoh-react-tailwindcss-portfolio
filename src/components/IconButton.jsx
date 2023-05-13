import React from "react";

const IconButton = (props) => {
    return (
        <div className="hover:text-blue-400 duration-150">
            <a href={props.link}>
                {props.iconImg}
            </a>
        </div>
    );
};

export default IconButton;