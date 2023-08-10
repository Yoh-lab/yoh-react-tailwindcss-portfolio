import React, { useState } from "react";
import "./HeaderPart.css";

const HeaderPart = (props) => {
  // const [selectedID, setSelectedID] = useState("Home");
  // window.addEventListener("scroll", function () {
  //   //スクロールの高さを取得
  //   let scroll = window.pageYOffset;
  //   // console.log(scroll+"  "+window.innerHeight)
  //   if (scroll >= 3 * window.innerHeight) {
  //     setSelectedID("Career");
  //     // console.log("赤");
  //   } else if (scroll >= 2 * window.innerHeight) {
  //     setSelectedID("Works");
  //     // console.log("オレンジ");
  //   } else if (scroll >= window.innerHeight) {
  //     setSelectedID("About");
  //     // console.log("青");
  //   } else {
  //     setSelectedID("Home");
  //     // console.log("緑");
  //   }
  // });

  // const styles = { outlineStyle: "solid", padding:"5px"  };//切り替わる際のズレをなくすためにborderは却下
  // const selected_styles = "p-2 button-border";
  const selected_styles = "p-2 btn6";
  const not_selected_styles = "p-2";
  // const header_styles =
  //   "flex justify-center items-center w-screen h-22 fixed z-10";
  // const header_styles_about = "flex justify-around items-center w-full h-24 fixed z-10 bg-green-700 bg-opacity-20";
  // const header_styles_skils = "flex justify-around items-center w-full h-24 fixed z-10";

  return (

    <header className="flex justify-center items-center w-screen h-22 bg-gray-600 bg-opacity-30">
      <ul className="flex  text-2xl md:text-3xl text-white">
        <li className="chapters w-28 h-16 md:w-52 md:h-20">
          <a
            className={
              props.selectedID === "Home"
                ? selected_styles
                : not_selected_styles
            }
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="chapters w-28 h-16 md:w-52 md:h-20">
          <a
            className={
              props.selectedID === "About"
                ? selected_styles
                : not_selected_styles
            }
            href="#about"
          >
            About
          </a>
        </li>
        <li className="chapters w-28 h-16 md:w-52 md:h-20">
          <a
            className={
              props.selectedID === "Hobby"
                ? selected_styles
                : not_selected_styles
            }
            href="#hobby"
          >
            Hobby
          </a>
        </li>
        <li className="chapters w-28 h-16 md:w-52 md:h-20">
          <a
            className={
              props.selectedID === "Works"
                ? selected_styles
                : not_selected_styles
            }
            href="#works"
          >
            Work
          </a>
        </li>
        {/* <li className="chapters w-28 h-16 md:w-52 md:h-20">
            <a
              className={
                props.selectedID === "Career" ? selected_styles : not_selected_styles
              }
              href="#career"
            >
              Career
            </a>
          </li> */}
      </ul>
    </header>
  );
};
export default HeaderPart;
