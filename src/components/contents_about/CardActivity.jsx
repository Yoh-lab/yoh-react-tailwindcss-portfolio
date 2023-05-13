import React from "react";
import About from "./About";

const path = "./contentfigs/CardNigetabi/";
const CardActivity = () => {
  return (
    <About
      title={"アクティビティ"}
    //   subtitle={""}
      date={""}
      thumbnail="src/components/contents_about/images/IMG_1271.JPG"
      description=
        "行ったことのない場所に行くのが大好きです！長期休暇には必ず旅行に行きます！"
      
      image_list={[
        "src/components/contents_about/images/IMG_8568 2.jpg",
        "src/components/contents_about/images/IMG_1714.jpg",
        "src/components/contents_about/images/IMG_9482.jpeg",
        "src/components/contents_about/images/IMG_3275.JPG"
      ]}
    />
  );
};

export default CardActivity;