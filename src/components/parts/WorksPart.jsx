import React from "react";
import CardPortfolio from "../contents_works/CardPortfolio";
import CardMangaVoca from "../contents_works/CardMangaVoca";
import CardNoccaNocca from "../contents_works/CardNoccaNocca";
import CardQuoridoor from "../contents_works/CardQuoridoor";
import CardMonsLab from "../contents_works/CardMonsLab";

const WorksPart = () => {
  return (

      <div className="flex-col items-center m-auto w-9/12 ">
        <section className="">
          <h1 className="text-gray-700 code font-bold pt-4 pb-12 text-left xl:text-5xl sm:text-5xl text-4xl">
            WORKS
          </h1>
        </section>
        {/* カードのdivタグ */}
        <section className="">
          <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg max-w-sm mx-auto">
            <div className="grid xl:gap-x-16 sm:gap-x-8 xl:gap-y-6 md:gap-y-24 sm:gap-y-6 gap-y-4 md:grid-cols-2 grid-cols-1">
              <CardPortfolio />
              <CardMangaVoca />
              <CardMonsLab />
              <CardQuoridoor />
              <CardNoccaNocca />
            </div>
          </div>
        </section>
      </div>
  );
};

export default WorksPart;
