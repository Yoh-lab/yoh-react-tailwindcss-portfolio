import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/Ramen.jpeg";

import first_image from "./images/IMG_3009.jpg"
import second_image from "./images/IMG_1669.jpg"
import third_image from "./images/IMG_2198.jpg"

const path = "./contentfigs/CardNigetabi/";
const CardRamen = () => {
  return (
    <About
      title={"食べ歩き"}
      english_title={"WALK & EAT"}
    //   subtitle={""}
      date={""}
      thumbnail={thumbnail_image}
      description=
        "行く先々で事前にリサーチした美味しいお店に入るようにしています！グルメといいながら、8割はラーメン巡りになっています。"
      
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardRamen;