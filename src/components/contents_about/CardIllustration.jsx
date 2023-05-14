import React from "react";
import About from "./About";
import thumbnail_image from "./images/Kon.jpeg";
import first_image from "./images/Kon.jpeg"
import second_image from "./images/IMG_9581.jpeg"
import third_image from "./images/IMG_8580.jpeg"

const path = "./contentfigs/CardNigetabi/";
const CardIllustration = () => {
  return (
    <About
      title={"お絵描き"}
    //   subtitle={""}
    date={"2020 ~"}
      thumbnail={thumbnail_image}
      description=
        "コロナ禍による外出自粛期間から絵を描き始めました！初めは好きな漫画の絵を模写していましたが、次第に満足できなくなり、オリジナルのイラストを描くようになりました！"
      
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardIllustration;