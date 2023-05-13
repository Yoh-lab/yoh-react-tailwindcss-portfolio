import React from "react";
import Modal from "../Modal";
import ButtonGithub from "./Icons/ButtonGithub";

const path = "./contentfigs/CardMakeshihi/";
const CardMakeshihi = () => {
  return (
    <Modal
      title={"市費管理アプリ"}
      subtitle={"書類の入力量を半分以下に"}
      date={"May.2022 - July.2022"}
      thumbnail={path + "thumbnail.png"}
      description={
        "　アルバイトの市費作成という書類業務の効率を上げるサービスです。一つの入力フォームで2つの書類が作成できるようになりました。さらに、電卓を用いていた金額の計算が、アプリ内で行われるようになりました。"
      }
      skills={"Python(Flask), HTML, CSS(Bootstrap)"}
      // links={<ButtonGithub link={"https://github.com/welshonion/team-project-l"}/>}
      imgPaths={[
        path + "contents1.png",
        path + "contents2.png",
        path + "contents3.png",
      ]}
    />
  );
};

export default CardMakeshihi;
