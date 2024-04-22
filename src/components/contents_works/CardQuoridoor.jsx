import React from "react";
import Modal from "./WorksModal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/Quoridoor.jpeg";
import first_image from "./images/Quoridor/Quoridor1.jpeg";
import second_image from "./images/Quoridor/Quoridor2.jpeg";

const path = "./contentfigs/CardPortfolio/";
const Quoridoor = () => {
  const text = `
  壁を駆使して敵陣にコマを進めるゲームです!
  買うお金がもったいなかったので、自分でUnityで作っちゃいました！
`;
const lines = text.trim().split("\n");
  return (
    <Modal
    title={"ゲーム - QUORIDOR -"}
    english_title={"GAME - QUORIDOR -"}
      // subtitle={"一つの判断が命取りに！コマと壁を使ったボードゲーム"}
      date={"Aug.2020"}
      thumbnail={thumbnail_image}
      // description={
      //   "壁を駆使して、敵陣にコマを進めるゲームです！買うお金がもったいなかったので、自分でUnityで作っちゃいました！（エラーが見つかったため、現在修正中です。）"
      // }
      skills={"C#(Unity)"}
      links={<><ButtonGithub link={"https://github.com/Yoh-lab/yoh-UnityGame-Corridor.git"}/></>}
      lines={lines}
      image_list={[
        first_image,
        second_image,
      ]}
    />
  );
};

export default Quoridoor;
