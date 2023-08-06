import React from "react";
import Modal from "./Modal";
import thumbnail_image from "./images/16-9/MangaVoca.jpeg";

import first_image from "./images/MangaVoca/MangaVoca1.jpeg";
import second_image from "./images/MangaVoca/MangaVoca2.jpeg";
import ButtonYoutube from "./Icons/ButtonYoutube";

const path = "./contentfigs/CardPortfolio/";
const CardMangaVoca = () => {
  const text = `
  大学の卒業研究で作成しました。
  漫画の閲覧中に見つけた未知単語をその場で登録し、暗記カード機能で記憶することができます。
  制作期間は約3ヶ月で、知識ゼロから1人で開発しました。
`;
const lines = text.trim().split("\n");
  return (
    <Modal
      title={"スマホアプリ - Manga Vocabulometer -"}
      english_title={"Mobile App - MANGA VOCABULOMATER -"}
      // subtitle={"漫画を用いた英語学習を行うスマホアプリ"}
      date={"Feb.2023"}
      thumbnail={thumbnail_image}
      // description={
      //   "大学の卒業研究で使用しました。漫画の閲覧する中で見つけた未知単語を登録し、登録した単語を暗記カードを用いて記憶することができます！制作期間はおよそ3ヶ月で、Flutterを用いて1人で開発しました。"
      // }
      skills={"Flutter, Firebase(Authentication, Firestore, Storage)"}
      links={<ButtonYoutube link={"https://youtu.be/RwCf8Z6kW5Q"} />}
      lines={lines}
      image_list={[first_image, second_image]}
    />
  );
};

export default CardMangaVoca;
