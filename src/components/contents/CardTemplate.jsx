import React from "react";
import Modal from "../Modal";
import ButtonGithub from "./Icons/ButtonGithub";

const path = "./contentfigs/CardNigetabi/";
const CardNigetabi = () => {
  return (
    <Modal
      title={"「逃げ旅」メーカー"}
      subtitle={"'たまには現実逃避したい'そんなあなたに旅行を提案するサービス"}
      date={"Dec.2022 - Jan.2023"}
      thumbnail={path + "thumbnail.png"}
      description={
        "　大学院の講義の課題として、チームで開発を行いました。メンバーの半数以上がWeb開発の経験がない中、お互いにコミュニケーションをとりながら行いました。アイデアの考案、フロントエンド、進捗管理、プレゼン発表を担当しました。"
      }
      skills={"JavaScript(React), Python(Flask), Docker, Figma"}
      links={<ButtonGithub link={"https://github.com/welshonion/team-project-l"}/>}
      imgPaths={[
        path + "contents1.png",
        path + "contents2.png",
        path + "contents3.png",
      ]}
    />
  );
};

export default CardNigetabi;
