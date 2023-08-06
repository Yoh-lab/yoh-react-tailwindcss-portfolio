import React from "react";
import CardVolleyBall from "../contents_about/CardVolleyBall";
import CardActivity from "../contents_about/CardActivity";
import CardIllustration from "../contents_about/CardIllustration";
import CardRamen from "../contents_about/CardRamen";

const HobbyPart = () => {
  return (
    <div className="flex-col items-center m-auto w-9/12">
      <section className="">
        <h1 className="text-gray-700 code font-bold pt-24 pb-8 text-left xl:text-5xl sm:text-5xl text-4xl">
          HOBBY
        </h1>
      </section>
      <section className="md:h-screen">
        <div className=" xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg max-w-sm mx-auto">
          <div className="grid xl:gap-x-16 xl:gap-y-6 md:gap-y-24 sm:gap-x-8 sm:gap-y-6 gap-y-4 md:grid-cols-2 grid-cols-1">
            <CardVolleyBall />
            <CardActivity />
            <CardIllustration />
            <CardRamen />
            {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="サイクリング" />
                      <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="イラスト" /> */}
            {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="アニメ・漫画" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HobbyPart;
