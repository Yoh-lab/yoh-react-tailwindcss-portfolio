import React from "react";
import Modal from "./Modal";
import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/portfolio.png";
import first_image from "./images/portfolio.png"
import second_image from "./images/portfolio.png"
import third_image from "./images/portfolio.png"

const path = "./contentfigs/CardPortfolio/";
const CardPortfolio = () => {
  return (
    <Modal
      title={"大塚のポートフォリオ"}
      subtitle={"'私'のことを知ってもらうためのWebサイト"}
      date={"Feb.2023"}
      thumbnail={thumbnail_image}
      description={
        "このサイトのことです。レスポンシブデザインに気を遣い、スマートフォンでも見やすいサイトを目指しました。"
      }
      skills={"JavaScript(React), CSS(Tailwind CSS), Node.js"}
      links={<ButtonGithub link={"https://github.com/Yoh-lab/yoh-react-tailwindcss-portfolio.git"}/>}
      image_list={[
        first_image,
        second_image,
        third_image
      ]}
    />
  );
};

export default CardPortfolio;
