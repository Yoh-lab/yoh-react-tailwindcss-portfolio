import React from "react";
import Modal from "./WorksModal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/OlymTopic.jpeg";
import first_image from "./images/OlymTopic/OlymTopic1.jpeg";
import second_image from "./images/OlymTopic/OlymTopic2.jpeg";


const path = "./contentfigs/CardPortfolio/";
const CardOlymTopic = () => {
  const text = `
  オリンピックの注目情報を集めたWebサイトです。大学の講義でチーム開発を行った際に作成しました。
  Firebaseを用いてデータベースを構築したことにより、チームメンバーがソースコードを触らずに選手情報などを追加できるようにしました。
`;
  const lines = text.trim().split("\n");
  return (
    <Modal
      title={"Webサイト - OlymTopic -"}
      english_title={"WEB SITE -OlymTopic-"}
      subtitle={"オリンピックの注目情報を集めたWebサイト"}
      date={"Jan.2024"}
      thumbnail={thumbnail_image}
      // description={
      //   "このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      // }
      skills={"JavaScript(React), Docker, Firebase(Firestore, cloud storage), chakra-ui"}
      links={<ButtonGithub link={"https://thursday-3th-koma-team-c.vercel.app/"} />}
      lines={lines}
      image_list={[
        first_image,
        second_image,
      ]}
    />
  );
};

export default CardOlymTopic;
