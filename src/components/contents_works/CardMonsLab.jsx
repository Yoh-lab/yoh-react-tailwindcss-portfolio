import React from "react";
import Modal from "./WorksModal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/MonsLab.jpeg";
import first_image from "./images/MonsLab/MonsLab1.jpeg"
import second_image from "./images/MonsLab/MonsLab2.jpeg"
import ButtonYoutube from "./Icons/ButtonYoutube";

const path = "./contentfigs/CardPortfolio/";
const CardMonsLab = () => {
  const text = `
  ハッカソンで作成・発表した作品です。
  ペイントツールで描いた絵と会話することで、自分好みのモンスターを作成できます。
開発人数は3人で、私はリーダーとしてアプリ全体の設計、特にフロントエンド開発を担当しました。
`;
const lines = text.trim().split("\n");
  return (
    <Modal
      title={"Webアプリ - MONS LAB -"}
      english_title={"Web App - MONS LAB -"}
      subtitle={"'私'のことを知ってもらうためのWebサイト"}
      date={"Feb.2023"}
      thumbnail={thumbnail_image}
      // description={
      //   "このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      // }
      skills={"JavaScript(React), CSS(Tailwind CSS), Firebase(Authentication, Cloud Firestore, Storage)"}
      links={<><ButtonGithub link={"https://github.com/Yoh-lab/MonsLabo_frontend"}/><ButtonYoutube link={"https://www.youtube.com/watch?v=r_hJfbmIVfQ&t=1s"}/></>}
      lines={lines}
      image_list={[
        first_image,
        second_image,
      ]}
    />
  );
};

export default CardMonsLab;
