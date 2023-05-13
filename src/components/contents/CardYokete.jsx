import React from "react";
import Modal from "../Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import ButtonExternalLink from "./Icons/ButtonExternalLink";

const path = "./contentfigs/CardYokete/";
const CardYokete = () => {
  return (
    <Modal
      title={"避けて!うさちゃん"}
      subtitle={"決してうさちゃんとふれ合ってはいけない。なぜなら..."}
      date={"Aug.2022"}
      thumbnail={path + "thumbnail.png"}
      description={
        "　「うさぎと触れ合うと、愛してしまう。だから逃げなければならない」をコンセプトにした回避ゲームです。キャラクターも自身でデザインしました。"
      }
      skills={"C#(Unity)"}
      links={<ButtonExternalLink link={"https://unityroom.com/games/love_rabbit"}/>}
      imgPaths={[
        path + "contents1.png",
        path + "contents2.png",
        path + "contents3.png",
      ]}
    />
  );
};

export default CardYokete;
