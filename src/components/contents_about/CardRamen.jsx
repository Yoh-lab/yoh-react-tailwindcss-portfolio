import React from "react";
import About from "./About";

const path = "./contentfigs/CardNigetabi/";
const CardRamen = () => {
  return (
    <About
      title={"グルメ"}
    //   subtitle={""}
      date={""}
      thumbnail="src/components/contents_about/images/IMG_1964.jpg"
      description=
        "行ったことのない場所に行くのが大好きです。体を動かすことも好きなので、"
      
      image_list={[
        "src/components/contents_about/images/IMG_1964.jpg",
        "src/components/contents_about/images/IMG_3009.jpg",
        "src/components/contents_about/images/IMG_1669.jpg",
        "src/components/contents_about/images/IMG_2198.jpg"
      ]}
    />
  );
};

export default CardRamen;