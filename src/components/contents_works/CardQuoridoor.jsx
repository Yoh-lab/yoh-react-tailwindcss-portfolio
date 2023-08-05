import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/Quoridoor.jpg";

import first_image from "./images/cori_developping_m.png"
import second_image from "./images/cori_screen_m.png"
import third_image from "./images/cori_screen_m.png"

const path = "./contentfigs/CardPortfolio/";
const Quoridoor = () => {
  return (
    <Modal
    title={"ゲーム - QUORIDOR -"}
    english_title={"GAME - QUORIDOR -"}
      // subtitle={"一つの判断が命取りに！コマと壁を使ったボードゲーム"}
      date={"Aug.2020"}
      thumbnail={thumbnail_image}
      description={
        "壁を駆使して、敵陣にコマを進めるゲームです！買うお金がもったいなかったので、自分でUnityで作っちゃいました！（エラーが見つかったため、現在修正中です。）"
      }
      skills={"C#(Unity)"}
      links={<ButtonGithub link={"https://github.com/Yoh-lab/yoh-UnityGame-Corridor.git"}/>}
      image_list={[
        first_image,
        second_image,
        third_image
      ]}
    />
  );
};

export default Quoridoor;
