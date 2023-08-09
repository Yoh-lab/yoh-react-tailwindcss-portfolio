import React, { useState, useEffect } from "react";
import HeaderPart from "../parts/HeaderPart";
import HomePart from "../parts/HomePart";
import AboutPart from "../parts/AboutPart";
import WorksPart from "../parts/WorksPart";
import CareerPart from "../parts/CareerPart";
import main_icon from "../icon/pawprint.png";
import FooterPart from "../parts/FooterPart";
import HobbyPart from "../parts/HobbyPart";

const HomePage = () => {
  const [selectedID, setSelectedID] = useState("Home");
  useEffect(() => {
    function handleScroll() {
      const AboutTag = document.getElementById("about");
      if (!AboutTag) return;
      const AboutTagPosition = AboutTag.getBoundingClientRect();
      const WorksTag = document.getElementById("hobby");
      if (!WorksTag) return;
      const WorksTagPosition = WorksTag.getBoundingClientRect();
      const CareerTag = document.getElementById("works");
      if (!CareerTag) return;
      const CareerTagPosition = CareerTag.getBoundingClientRect();

      //スクロールの高さを取得
      let scroll = window.pageYOffset;
      // console.log(scroll+"  "+window.innerHeight)
      console.log(scroll + "  " + CareerTagPosition.top);

      if (AboutTagPosition.top > 0) {
        setSelectedID("Home");
        document.body.style.backgroundColor = "#85FFE9";
        // console.log("赤");
      } else if (WorksTagPosition.top > 0) {
        setSelectedID("About");
        document.body.style.backgroundColor = "#8BEAFF";
        // console.log("オレンジ");
      } else if (CareerTagPosition.top > 0.5) {
        setSelectedID("Hobby");
        document.body.style.backgroundColor = "#B0D5FF";
        // console.log("青");
      } else {
        setSelectedID("Works");
        document.body.style.backgroundColor = "#FFDBB0";
        // console.log("緑");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen">
        <div  className="fixed top-0 left-0  z-30">
          <HeaderPart selectedID={selectedID}/>
        </div>
        <div className="absolute top-0 left-0 z-20">
          {/* <section className=" bg-navy h-screen" id="home"> */}
          <section className="w-screen h-screen border-none" id="home">
            <HomePart />
          </section>
          <section
            className="text-gray-700 min-h-screen border-t border-none"
            id="about"
          >
            <AboutPart />
          </section>
          <section
            className="text-gray-700 min-h-screen border-t border-none"
            // className="text-gray-700 border-t border-gray-200 bg-white"
            id="hobby"
          >
            <HobbyPart />
          </section>
          <section
            className="text-gray-700 min-h-screen border-t border-none"
            // className="text-gray-700 border-t border-gray-200 bg-white"
            id="works"
          >
            <WorksPart />
          </section>
          {/* <section
            className="text-gray-700 min-h-screen border-t border-none"
            // className="text-gray-700 border-t border-gray-200 bg-white"
            id="career"
          >
            <CareerPart />
          </section> */}
          <section className="text-white border-b border-gray-200 bg-blue-400">
            <FooterPart />
          </section>
        </div>
        <div className="icon fixed top-0 left-0 w-screen h-screen flex justify-center items-center pointer-events-none z-10 opacity-10">
          <img className="md:w-96 w-72" src={main_icon} alt="Main Icon" />
        </div>
      </div>
  );
};

export default HomePage;

//スクロール発火イベント:背景色の変更
//https://1-notes.com/javascript-change-background-color-on-scrolling/
//http://www.netyasun.com/home/color.html

//スムーススクロールの動作を実装
window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});

// window.addEventListener("scroll", function () {
//   //スクロールの高さを取得
//   let scroll = window.pageYOffset;
//   // console.log(scroll+"  "+window.innerHeight)
//   if (scroll > 4 * window.innerHeight) {
//     document.body.style.backgroundColor = "#FFC0CB";
//     // document.getElementById('head').style.backgroundColor = "#B5850C40"
//     // console.log("赤");
//   } else if (scroll >= 3 * window.innerHeight) {
//     document.body.style.backgroundColor = "#FFC0CB";
//     // document.getElementById('head').style.backgroundColor = "#B5850C40"
//     // console.log("赤");
//   } else if (scroll >= 2 * window.innerHeight) {
//     document.body.style.backgroundColor = "#FBCF62";
//     // document.getElementById('head').style.backgroundColor = "#B5850C40"
//     // console.log("オレンジ");
//   } else if (scroll >= window.innerHeight) {
//     document.body.style.backgroundColor = "#82D5FB";
//     // document.getElementById('head').style.backgroundColor = "#B5850C40"
//     // console.log("青");
//   } else {
//     document.body.style.backgroundColor = "#4EF5CF";
//     // document.getElementById('head').style.backgroundColor = "#00000040"
//     // console.log("緑");
//   }
// });
