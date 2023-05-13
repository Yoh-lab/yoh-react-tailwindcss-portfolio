import React from "react";
import About from "./About";

const path = "./contentfigs/CardNigetabi/";
const CardIllustration = () => {
  return (
    <About
      title={"お絵描き"}
    //   subtitle={""}
    date={"2020 ~"}
      thumbnail="src/components/contents_about/images/Kon.PNG"
      description=
        "コロナ禍による外出自粛期間から絵を描き始めました！初めは好きな漫画の絵を模写していましたが、次第に満足できなくなり、オリジナルのイラストを描くようになりました！"
      
      image_list={[
        "src/components/contents_about/images/Kon.PNG",
        "src/components/contents_about/images/IMG_9581.jpeg",
        "src/components/contents_about/images/IMG_8580.jpeg"
      ]}
    />
  );
};

export default CardIllustration;