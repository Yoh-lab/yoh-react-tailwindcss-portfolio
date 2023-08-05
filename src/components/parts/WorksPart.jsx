import React from 'react'
import CardPortfolio from "../contents_works/CardPortfolio";
import CardMangaVoca from "../contents_works/CardMangaVoca";
import CardNoccaNocca from "../contents_works/CardNoccaNocca";
import CardCorridor from "../contents_works/CardCorridor";

const WorksPart = () => {
  return (
    <div className="container px-5 py-20 mx-auto">
          <div className="flex justify-center mb-1">
          </div>
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              Works
            </h1>
            <p className="pb-1">
              これまでに作ったものを載せていきます
              <br />
              順次追加していきます
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap justify-center">
            <CardPortfolio />
            <CardMangaVoca />
            <CardNoccaNocca />
            <CardCorridor />
          </div>
        </div>
  )
}

export default WorksPart