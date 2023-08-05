import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/Paint.jpeg";

import first_image from "./images/Kon.jpeg"
import second_image from "./images/IMG_9581.jpeg"
import third_image from "./images/IMG_8580.jpeg"

const path = "./contentfigs/CardNigetabi/";
const CardIllustration = () => {
  const text = `
  コロナ禍による外出自粛期間から絵を描き始めました！
  初めは好きな漫画の絵の模写のみでしたが、最近はオリジナルのイラストも描いてます！

  ⚪︎実績
  Youtubeのイラストチャンネルで登録者200人を達成！
  バズり経験（50万回再生）のあるチャンネルのアイコンを制作
`;
const lines = text.trim().split("\n");
  return (
    <About
      title={"デジタル・アナログイラスト制作"}
      english_title={"DIGITAL / ANALOG DRAWING"}
    //   subtitle={""}
    date={"2020 ~"}
      thumbnail={thumbnail_image}
      // description=
      //   "コロナ禍による外出自粛期間から絵を描き始めました！初めは好きな漫画の絵を模写していましたが、次第に満足できなくなり、オリジナルのイラストを描くようになりました！"
        lines={lines}
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardIllustration;