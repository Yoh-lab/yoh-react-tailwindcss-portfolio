import React from "react";
import About from "./About";
import thumbnail_image from "./images/16-9/Activity.jpeg";

import first_image from "./images/Activity/Activity1.jpeg";
import second_image from "./images/Activity/Activity2.jpeg";
import third_image from "./images/Activity/Activity3.jpeg";

const path = "./contentfigs/CardNigetabi/";
const CardActivity = () => {
  const text = `
  行ったことのない場所に行くのが大好きで、
  長期休暇には必ず旅行に行きます！

  ⚪︎旅行先
  関東（東京・横浜）、京都、岐阜、
  九州（福岡・長崎・大分・熊本）

  ⚪︎アウトドア
  スノボ、サイクリング、バスケ、野球など
`;
  const lines = text.trim().split("\n");
  return (
    <About
      title={"アクティビティ"}
      english_title={"ACTIVITY"}
      //   subtitle={""}
      date={""}
      thumbnail={thumbnail_image}
      // description="行ったことのない場所に行くのが大好きです！長期休暇には必ず旅行に行きます！"
      lines={lines}
      image_list={[first_image, second_image, third_image]}
    />
  );
};

export default CardActivity;
