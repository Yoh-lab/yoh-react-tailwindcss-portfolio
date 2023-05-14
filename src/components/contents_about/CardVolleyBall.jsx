import React from "react";
import About from "./About";
import thumbnail_image from "./images/IMG_3878.jpg";
import first_image from "./images/IMG_4706.jpeg"
import second_image from "./images/LINE_ALBUM_230521.jpg"
import third_image from "./images/IMG_4708.jpg"

const path = "./contentfigs/CardNigetabi/";
const CardVolleyBall = () => {
  return (
    <About
      title={"バレーボール"}
    //   subtitle={""}
      date={"2013 ~"}
      thumbnail={thumbnail_image}
      description=
        "中学1年生からバレーボールを続けています。高校2年で兵庫県ベスト8、近畿大会出場を果たしました。高校3年生の時には部長を務めました。大学でもバレーボールサークルで活動しています。"
      
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardVolleyBall;