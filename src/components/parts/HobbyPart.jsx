import React, { useState, useEffect } from "react";
import CardVolleyBall from "../contents_about/CardVolleyBall";
import CardActivity from "../contents_about/CardActivity";
import CardIllustration from "../contents_about/CardIllustration";
import CardRamen from "../contents_about/CardRamen";

import "./Animation.css";
import { useInView } from "react-intersection-observer";

const HobbyPart = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // アニメーションを1回だけ実行する
    threshold: 0.01, // 要素が画面内に10%以上表示されたら実行
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

  window.onload = function() {
    // スクロールを禁止にする関数
    function disableScroll(event) {
      event.preventDefault();
    }
  
    // スクロール禁止
    document.getElementById('btn1').onClick = function() {
      // イベントと関数を紐付け
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
  
    // スクロール解除
    document.getElementById('btn2').onClick = function() {
      // イベントと関数を紐付け
      document.removeEventListener('touchmove', disableScroll, { passive: false });
      document.removeEventListener('mousewheel', disableScroll, { passive: false });
    }
  }

  return (
    <div className={`${isClicked?"touch-none":""}`}>
      <div className=" h-screen flex-col items-center m-auto w-9/12 ">
        <section className="">
          <h1 className="text-gray-700 code font-bold pt-24 pb-8 text-left xl:text-5xl sm:text-5xl text-4xl">
            HOBBY
          </h1>
        </section>
        <section ref={ref} className="md:h-screen">
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
                id="btn1"
              >
                <CardVolleyBall />
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
                <CardActivity />
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
                <CardIllustration />
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
                <CardRamen />
              </div>
              {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="サイクリング" />
                        <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="イラスト" /> */}
              {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="アニメ・漫画" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HobbyPart;
