import React from "react";
import "./Animation.css";

const HomePart = () => {
  // const characters = "S,T,U,D,E,N,T, ,E,N,G,I,N,E,E,R,',S, ,P,O,R,T,F,O,L,I,O, ,S,I,T,E";
  const characters = "STUDENT ENGINEER'S PORTFOLIO SITE";
  const animationDelayStep = 0.015; // 各文字の遅延時間の間隔

  return (
    <div>
      <div className="flex flex-col justify-center gap-6 items-center h-screen animate-scale-up-center">
        <h1 className="flex text-gray-700 code font-bold md:text-7xl sm:text-5xl text-3xl">
          {/* YOH OTSUKA */}
          <div className="delay-time08 zoomIn">Y</div>
          <div className="delay-time08-5 zoomIn">O</div>
          <div className="delay-time09 zoomIn">H</div>
          <div className="delay-time09-5 zoomIn">&nbsp;</div>
          <div className="delay-time10 zoomIn">O</div>
          <div className="delay-time10-5 zoomIn">T</div>
          <div className="delay-time11 zoomIn">S</div>
          <div className="delay-time11-5 zoomIn">U</div>
          <div className="delay-time12 zoomIn">K</div>
          <div className="delay-time12-5 zoomIn">A</div>
        </h1>
        <h2 className="flex text-gray-700 code md:text-3xl sm:text-2xl text-md">
          {/* STUDENT ENGINEER'S PORTFOLIO SITE */}
          {characters.split("").map((char, index) => (
            <div
              key={index}
              style={{
                "--animation-delay": `${index * animationDelayStep+0.8}s`,
              }}
              className="animated-char zoomIn"
            >
              {char === ' ' ? '\u00A0' : char}
            </div>
          ))}

          {/* <div className="delay-time08 zoomIn">S</div>
          <div className="delay-time08-5 zoomIn">T</div>
          <div className="delay-time09 zoomIn">U</div>
          <div className="delay-time10 zoomIn">D</div>
          <div className="delay-time10-5 zoomIn">E</div>
          <div className="delay-time11 zoomIn">N</div>
          <div className="delay-time11-5 zoomIn">T</div>
          <div className="delay-time09-5 zoomIn">&nbsp;</div>
          <div className="delay-time12 zoomIn">K</div>
          <div className="delay-time12-5 zoomIn">A</div> */}
        </h2>
      </div>
    </div>
  );
};

export default HomePart;
