import React, { useState, useEffect } from "react";
import CardPortfolio from "../contents_works/CardPortfolio";
import CardMangaVoca from "../contents_works/CardMangaVoca";
import CardNoccaNocca from "../contents_works/CardNoccaNocca";
import CardQuoridoor from "../contents_works/CardQuoridoor";
import CardMonsLab from "../contents_works/CardMonsLab";

import "./Animation.css";
import { useInView } from 'react-intersection-observer';

const WorksPart = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.01, // 要素が1%表示されたらinViewをtrueにする
  });

  const [isClicked, setIsClicked] = useState(false);
  const handleClicked = () => {
    setIsClicked(true);
    console.log("clicked");
  };

  useEffect(() => {
    setIsClicked(false);
    console.log("isClicked changed:", inView);
  }, [inView]);



  return (
    <div className="flex-col items-center m-auto w-9/12 ">
        <section className="">
          <h1 className="text-gray-700 code font-bold pt-24 pb-8 text-left xl:text-5xl sm:text-5xl text-4xl">
            WORKS
          </h1>
        </section>
        <section ref={ref} className="">
        <div className=" xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg max-w-sm mx-auto">
          <div className="grid xl:gap-x-16 xl:gap-y-6 md:gap-y-24 sm:gap-x-8 sm:gap-y-6 gap-y-4 md:grid-cols-2 grid-cols-1">
            <div
              className={`${
                inView
                  ? isClicked
                    ? "opacity-100"
                    : "opacity-100 zoomIn"
                  : "opacity-0"
              }`}
              onClick={handleClicked}
            >
              <CardPortfolio />
            </div>
            <div
              className={`${
                inView
                  ? isClicked
                    ? "opacity-100"
                    : "opacity-100 delay-time02 zoomIn"
                  : "opacity-0"
              }`}
              onClick={handleClicked}
            >
              <CardMangaVoca />
            </div>
            <div
              className={`${
                inView
                  ? isClicked
                    ? "opacity-100"
                    : "opacity-100 delay-time04 zoomIn"
                  : "opacity-0"
              }`}
              onClick={handleClicked}
            >
              <CardMonsLab />
            </div>
            {/* <div className="delay-time06 box zoomIn"> */}
            {/* もし、スライドインするなら、delay-time02 box fadeUpとかにする */}
            <div
              className={`${
                inView
                  ? isClicked
                    ? "opacity-100"
                    : "opacity-100 delay-time06 zoomIn"
                  : "opacity-0"
              }`}
              onClick={handleClicked}
            >
             <CardQuoridoor />
            </div>
            {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="サイクリング" />
                      <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="イラスト" /> */}
            {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="アニメ・漫画" /> */}
            <div
              className={`${
                inView
                  ? isClicked
                    ? "opacity-100"
                    : "opacity-100 delay-time06 zoomIn"
                  : "opacity-0"
              }`}
              onClick={handleClicked}
            >
             <CardNoccaNocca />
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};


export default WorksPart;
