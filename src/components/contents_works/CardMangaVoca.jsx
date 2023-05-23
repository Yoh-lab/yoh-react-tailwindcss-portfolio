import React from "react";
import Modal from "./Modal";
// import ButtonGithub from "./Icons/ButtonGithub";
import thumbnail_image from "./images/voca_main_m.png";
import first_image from "./images/voca_screen_m.png"
import second_image from "./images/voca_screen_m.png"
import third_image from "./images/voca_screen_m.png"
import ButtonYoutube from "./Icons/ButtonYoutube";

const path = "./contentfigs/CardPortfolio/";
const CardMangaVoca = () => {
  return (
    <Modal
      title={"Manga Vocabulometer 2.0"}
      subtitle={"漫画を用いた英語学習を行うスマホアプリ"}
      date={"Feb.2023"}
      thumbnail={thumbnail_image}
      description={
        "大学の卒業研究で使用しました。漫画の閲覧する中で見つけた未知単語を登録し、登録した単語を暗記カードを用いて記憶することができます！制作期間はおよそ3ヶ月で、Flutterを用いて1人で開発しました。"
      }
      skills={"JavaScript(React), CSS(Tailwind CSS), Node.js"}
      links={<ButtonYoutube link={"https://youtu.be/RwCf8Z6kW5Q"}/>}
      image_list={[
        first_image,
        second_image,
        third_image
      ]}
    />
  );
};

export default CardMangaVoca;
