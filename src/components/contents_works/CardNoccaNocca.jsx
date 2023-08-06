import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/NoccaNocca.jpeg";

import first_image from "./images/NoccaNocca/NoccaNocca1.jpeg";
import second_image from "./images/NoccaNocca/NoccaNocca2.jpeg";


const path = "./contentfigs/CardPortfolio/";
const CardNoccaNocca = () => {
  const text = `
  3つまでコマを重ねることができる条件で、敵陣のゴールまでコマを進めるゲームです！
  買うお金がもったいなかったので、自分でUnityで作っちゃいました！
`;
const lines = text.trim().split("\n");
  return (
    <Modal
      title={"ゲーム - NOCCA NOCCA -"}
      english_title={"GAME -NOCCA NOCCA-"}
      subtitle={"立体的な戦略が魅力のボードゲーム"}
      date={"Aug.2020"}
      thumbnail={thumbnail_image}
      // description={
      //   "3つまでコマを重ねることができる条件下で、敵陣のゴールまでコマを進めるゲームです！買うお金がもったいなかったので、自分でUnityで作っちゃいました！"
      // }
      skills={"C#(Unity)"}
      links={
        <ButtonGithub
          link={"https://github.com/Yoh-lab/Yoh-lab-yoh-NoccaNocca"}
        />
      }
      lines={lines}
      image_list={[first_image, second_image]}
    />
  );
};

export default CardNoccaNocca;
