import React from "react";
import Modal from "../Modal";
import ButtonGithub from "./Icons/ButtonGithub";

const path = "./contentfigs/CardCancelChecker/";
const CardCancelChecker = () => {
  return (
    <Modal
      title={"予約キャンセルチェッカー"}
      subtitle={"面倒なキャンセル待ち、LINEがやります"}
      date={"Jan.2023"}
      thumbnail={path + "thumbnail.png"}
      description={
        "　予約のキャンセルが出たときに、LINEが通知をしてくれるサービスです。行きたかった美術館が、予約開始5分でチケットが売り切れてしまったため、アプリの作成を決意しました。結果、友人と自分のチケットを2日分を2枚ずつ、合計4枚取ることができました。"
      }
      skills={"Python"}
      // links={<ButtonGithub link={"https://github.com/seiya-lab/geidai_reserve"}/>}
      imgPaths={[
        path + "thumbnail.png",
        path + "contents2.jpeg",
        path + "contents1.jpeg",
      ]}
    />
  );
};

export default CardCancelChecker;
