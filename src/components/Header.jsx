import React, { useState } from "react";

const Header = () => {
  const [selectedID, setSelectedID] = useState("Home");
  window.addEventListener("scroll", function () {
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    // console.log(scroll+"  "+window.innerHeight)
    if (scroll >= 3 * window.innerHeight) {
      setSelectedID("Work");
      // console.log("赤");
    } else if (scroll >= 2 * window.innerHeight) {
      setSelectedID("Skills");
      // console.log("オレンジ");
    } else if (scroll >= window.innerHeight) {
      setSelectedID("About");
      // console.log("青");
    } else {
      setSelectedID("Home");
      // console.log("緑");
    }
  });

  const styles = { outlineStyle: "solid" };//切り替わる際のズレをなくすためにborderは却下

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        /*backgroundColor: "yellow",*/
        color: "white",
        height: "90px",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <div
        className=""
      >
        <ul className="flex  text-xl md:text-3xl p-8 text-white">
          <li className="flex justify-center w-52 px-1 py-5">
            <a
              className=""
              href="#home"
              style={
                selectedID === "Home" ? styles : {}
              }
            >
              Home
            </a>
          </li>
          <li className="flex justify-center w-52 px-1 py-5">
            <a
              href="#about"
              style={
                selectedID === "About"
                  ? styles
                  : {}
              }
            >
              About
            </a>
          </li>
          <li className="flex justify-center w-52 px-1 py-5">
            <a
              href="#skills"
              style={
                selectedID === "Skills"
                  ? styles
                  : {}
              }
            >
              Skills
            </a>
          </li>
          <li className="flex justify-center w-52 px-1 py-5">
            <a
              href="#works"
              style={
                selectedID === "Work" ? styles : {}
              }
            >
              Work
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
