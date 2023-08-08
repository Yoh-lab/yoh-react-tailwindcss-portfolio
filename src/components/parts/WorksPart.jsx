import React from "react";
import CardPortfolio from "../contents_works/CardPortfolio";
import CardMangaVoca from "../contents_works/CardMangaVoca";
import CardNoccaNocca from "../contents_works/CardNoccaNocca";
import CardQuoridoor from "../contents_works/CardQuoridoor";
import CardMonsLab from "../contents_works/CardMonsLab";

import "./Animation.css";
import { useInView } from 'react-intersection-observer';




const ContentsList = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.0, // 要素が1%表示されたらinViewをtrueにする
  });

  return (
    <section ref={ref}  className="">
          <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg max-w-sm mx-auto">
            <div className="grid xl:gap-x-16 sm:gap-x-8 xl:gap-y-6 md:gap-y-24 sm:gap-y-6 gap-y-4 md:grid-cols-2 grid-cols-1">
            <div className={`${inView ? 'opacity-100 zoomIn' : 'opacity-0 '}`}>
              <CardPortfolio />
              </div>
              <div className={`${inView ? 'opacity-100 delay-time02 zoomIn' : 'opacity-0 '}`}>
              <CardMangaVoca />
              </div>
              <div className={`${inView ? 'opacity-100 delay-time04 zoomIn' : 'opacity-0 '}`}>
              <CardMonsLab />
              </div>
              <div className={`${inView ? 'opacity-100 delay-time06 zoomIn' : 'opacity-0 '}`}>
              <CardQuoridoor />
              </div>
              <div className={`${inView ? 'opacity-100 delay-time08 zoomIn' : 'opacity-0 '}`}>
              <CardNoccaNocca />
              </div>
            </div>
          </div>
        </section>
  );
};



const WorksPart = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // アニメーションを1回だけ実行する
    threshold: 0.0,    // 要素が画面内に10%以上表示されたら実行
  });

  return (

      <div className="flex-col items-center m-auto w-9/12 ">
        <section className="">
          <h1 className="text-gray-700 code font-bold pt-24 pb-8 text-left xl:text-5xl sm:text-5xl text-4xl">
            WORKS
          </h1>
        </section>
        {/* カードのdivタグ */}
        <ContentsList/>
      </div>
  );
};

export default WorksPart;
