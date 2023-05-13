import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";

const path = "./contentfigs/CardPortfolio/";
const CardPortfolio = () => {
  return (
    <Modal
      title={"大塚のポートフォリオ"}
      subtitle={"'私'のことを知ってもらうためのWebサイト"}
      date={"Feb.2023"}
      thumbnail={"src/components/contents_works/images/portfolio.png"}
      description={
        "このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      }
      skills={"JavaScript(React), CSS(Tailwind CSS), Node.js"}
      links={<ButtonGithub link={"https://github.com/Yoh-lab/yoh-react-tailwindcss-portfolio.git"}/>}
      imgPaths={[
        "src/components/contents_works/images/portfolio.png",
        "src/components/contents_works/images/portfolio.png",
        "src/components/contents_works/images/portfolio.png",
      ]}
    />
  );
};

export default CardPortfolio;
