import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/Ramen.jpeg";

import first_image from "./images/Ramen/Ramen1.jpeg"
import second_image from "./images/Ramen/Ramen2.jpeg"
import third_image from "./images/Ramen/Ramen3.jpeg"

const path = "./contentfigs/CardNigetabi/";
const CardRamen = () => {
    const text = `
    行く先々で事前にリサーチした美味しいお店に入るようにしています！
    ただし8割ぐらいラーメン巡りになっています。
    昔ほどがっつり食べられなくなってきたのが悲しいです。

  ⚪︎好きな食べ物
  ラーメン、肉料理、魚料理
  というかなんでも好きです。
`;
const lines = text.trim().split("\n");
  return (
    <About
      title={"食べ歩き"}
      english_title={"WALK & EAT"}
    //   subtitle={""}
      date={""}
      thumbnail={thumbnail_image}
      description=
        "行く先々で事前にリサーチした美味しいお店に入るようにしています！グルメといいながら、8割はラーメン巡りになっています。"
        lines={lines}
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardRamen;