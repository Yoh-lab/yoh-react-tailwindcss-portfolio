import React from "react";
import Modal from "../Modal";
import ButtonGithub from "./Icons/ButtonGithub";

const path = "./contentfigs/CardPortfolio/";
const CardPortfolio = () => {
  return (
    <Modal
      title={"Seiya's Portfolio"}
      subtitle={"'私'を伝えるウェブサイト"}
      date={"Feb.2023"}
      thumbnail={path + "thumbnail.png"}
      description={
        "　このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      }
      skills={"JavaScript(React), CSS(Tailwind CSS), Node.js"}
      links={<ButtonGithub link={"https://github.com/seiya-lab/seiya-react-tailwindcss-portfolio"}/>}
      imgPaths={[
        path + "contents1.png",
        path + "contents2.jpeg",
        path + "contents2.jpeg",
      ]}
    />
  );
};

export default CardPortfolio;
