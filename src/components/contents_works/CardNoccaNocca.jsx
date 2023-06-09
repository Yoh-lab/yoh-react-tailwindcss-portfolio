import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/nocca_screen_m.png";
import first_image from "./images/nocca_developping_m.png"
import second_image from "./images/nocca_screen_m.png"
import third_image from "./images/nocca_screen_m.png"

const path = "./contentfigs/CardPortfolio/";
const CardNoccaNocca = () => {
  return (
    <Modal
      title={" Nocca Nocca"}
      subtitle={"立体的な戦略が魅力のボードゲーム"}
      date={"Aug.2020"}
      thumbnail={thumbnail_image}
      description={
        "3つまでコマを重ねることができる条件下で、敵陣のゴールまでコマを進めるゲームです！買うお金がもったいなかったので、自分でUnityで作っちゃいました！"
      }
      skills={"C#(Unity)"}
      links={<ButtonGithub link={"https://github.com/Yoh-lab/Yoh-lab-yoh-NoccaNocca"}/>}
      image_list={[
        first_image,
        second_image,
        third_image
      ]}
    />
  );
};

export default CardNoccaNocca;
