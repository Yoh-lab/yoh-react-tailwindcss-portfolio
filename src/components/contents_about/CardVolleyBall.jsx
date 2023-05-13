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
        "大学院の講義の課題として、チームで開発を行いました。メンバーの半数以上がWeb開発の経験がない中、お互いにコミュニケーションをとりながら行いました。アイデアの考案、フロントエンド、進捗管理、プレゼン発表を担当しました。"
      
      image_list={[
        "src/components/contents_about/images/IMG_4706.JPG",
        "src/components/contents_about/images/LINE_ALBUM_230521.jpg",
        "src/components/contents_about/images/IMG_3878.jpg"
      ]}
    />
  );
};

export default CardVolleyBall;