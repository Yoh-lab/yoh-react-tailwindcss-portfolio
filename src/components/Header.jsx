import React, { useState } from "react";

const Header = () => {
  const [selectedID, setSelectedID] = useState("Home");
  window.addEventListener("scroll", function () {
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    // console.log(scroll+"  "+window.innerHeight)
    if (scroll >= 3 * window.innerHeight) {
      setSelectedID("Carrer");
      // console.log("赤");
    } else if (scroll >= 2 * window.innerHeight) {
      setSelectedID("Works");
      // console.log("オレンジ");
    } else if (scroll >= window.innerHeight) {
      setSelectedID("About");
      // console.log("青");
    } else {
      setSelectedID("Home");
      // console.log("緑");
    }
  });

  // const styles = { outlineStyle: "solid", padding:"5px"  };//切り替わる際のズレをなくすためにborderは却下
  const selected_styles = "outline p-2";
  const not_selected_styles = "p-2";
  const header_styles =
    "flex justify-around items-center w-full <h-22></h-22> fixed z-10";
  // const header_styles_about = "flex justify-around items-center w-full h-24 fixed z-10 bg-green-700 bg-opacity-20";
  // const header_styles_skils = "flex justify-around items-center w-full h-24 fixed z-10";

  return (
    <header className={header_styles} id="head">
      <div className="">
        <ul className="flex  text-xl md:text-3xl text-white">
          <li className="flex items-center justify-center w-52 h-20 ">
            <a
              className={
                selectedID === "Home" ? selected_styles : not_selected_styles
              }
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="flex items-center justify-center w-52 h-20">
            <a
              className={
                selectedID === "About" ? selected_styles : not_selected_styles
              }
              href="#about"
            >
              About
            </a>
          </li>
          <li className="flex items-center justify-center w-52 h-20">
            <a
              className={
                selectedID === "Works" ? selected_styles : not_selected_styles
              }
              href="#works"
            >
              Work
            </a>
          </li>
          <li className="flex items-center justify-center w-52 h-20">
            <a
              className={
                selectedID === "Career" ? selected_styles : not_selected_styles
              }
              href="#career"
            >
              Carrer
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
