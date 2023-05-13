import React from "react";
import About from "./About";

const path = "./contentfigs/CardNigetabi/";
const CardVolleyBall = () => {
  return (
    <About
      title={"バレーボール"}
    //   subtitle={""}
      date={"2013 ~"}
      thumbnail="src/components/contents_about/images/IMG_3878.jpg"
      description=
        "中学1年生からバレーボールを続けています。高校2年で兵庫県ベスト8、近畿大会出場を果たしました。高校3年生の時には部長を務めました。大学でもバレーボールサークルで活動しています。"
      
      image_list={[
        "src/components/contents_about/images/IMG_4706.JPG",
        "src/components/contents_about/images/LINE_ALBUM_230521.jpg",
        "src/components/contents_about/images/IMG_3878.jpg"
      ]}
    />
  );
};

export default CardVolleyBall;