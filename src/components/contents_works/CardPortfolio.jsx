import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/16-9/WebPage.jpeg";
import first_image from "./images/Portfolio/Portfolio1.jpeg";
import second_image from "./images/Portfolio/Portfolio2.jpeg";


const path = "./contentfigs/CardPortfolio/";
const CardPortfolio = () => {
  const text = `
  このサイトのことです！初見での情報量が多すぎないように、シンプルなデザインを心がけました！
  レスポンス対応に挑戦したので、ぜひスマホでも見てみてください！
  大学4回生で本格的にWeb制作に取り組み始めてから、Web開発にハマってのめり込んでいます（笑）
  CSSを勉強中で、積極的に効果を入れています！
`;
const lines = text.trim().split("\n");
  return (
    <Modal
      title={"Webサイト制作"}
      english_title={"WEB SITE MAKE"}
      subtitle={"'私'のことを知ってもらうためのWebサイト"}
      date={"Feb.2023"}
      thumbnail={thumbnail_image}
      // description={
      //   "このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      // }
      skills={"JavaScript(React), CSS(Tailwind CSS), Node.js"}
      links={<ButtonGithub link={"https://github.com/Yoh-lab/yoh-react-tailwindcss-portfolio.git"}/>}
      lines={lines}
      image_list={[
        first_image,
        second_image,
      ]}
    />
  );
};

export default CardPortfolio;
