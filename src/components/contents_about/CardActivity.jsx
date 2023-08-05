import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/Activity.jpeg";

import first_image from "./images/IMG_8568 2.jpg"
import second_image from "./images/IMG_1714.jpg"
import third_image from "./images/IMG_3275.jpeg"

const path = "./contentfigs/CardNigetabi/";
const CardActivity = () => {
  return (
    <About
      title={"アクティビティ"}
      english_title={"ACTIVITY"}
    //   subtitle={""}
      date={""}
      thumbnail={thumbnail_image}
      description=
        "行ったことのない場所に行くのが大好きです！長期休暇には必ず旅行に行きます！"
      
      image_list={[
        first_image,
        second_image,
        third_image
      ]}
    />
  );
};

export default CardActivity;