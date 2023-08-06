import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/VolleyBall.jpeg";

import first_image from "./images/VolleyBall/VolleyBall1.jpeg"
import second_image from "./images/VolleyBall/VolleyBall2.jpeg"
import third_image from "./images/VolleyBall/VolleyBall3.jpeg"

const path = "./contentfigs/CardNigetabi/";
const CardVolleyBall = () => {
  const text = `
  中学・高校でバレーボールに所属していました！
  中学ではリベロ、高校ではスパイカー（オポジット）とセッターをしていたので、どのポジションでもプレーできます！

  ⚪︎実績
  高校2年時：兵庫県ベスト8、近畿大会出場！
  高校3年時：部長に就任、神戸市2部リーグ3位
`;
const lines = text.trim().split("\n");
  return (
    <About
      title={"バレーボール歴10年"}
      english_title={"VOLLEYBALL"}
    //   subtitle={""}
      date={"2013 ~"}
      thumbnail={thumbnail_image}
      // description=
      //   "中学1年生からバレーボールを続けています。高校2年で兵庫県ベスト8、近畿大会出場を果たしました。高校3年生の時には部長を務めました。大学でもバレーボールサークルで活動しています。"
        lines={lines}
        image_list={[
          first_image,
          second_image,
          third_image
        ]}
    />
  );
};

export default CardVolleyBall;