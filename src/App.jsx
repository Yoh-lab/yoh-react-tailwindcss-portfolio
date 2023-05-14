//参考
//http://manato.ca/
//https://fukushimanaoki.com/
//https://www.mikeinghamdesign.com/


import { useState } from "react";
import "./App.css";
import CardPortfolio from "./components/contents_works/CardPortfolio";
import Header from "./components/Header";
import CardVolleyBall from "./components/contents_about/CardVolleyBall";
import CardActivity from "./components/contents_about/CardActivity";
import CardIllustration from "./components/contents_about/CardIllustration";
import CardRamen from "./components/contents_about/CardRamen";
import main_icon from "./components/icon/pawprint.png";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Header />

      {/* <section className=" bg-navy h-screen" id="home"> */}
      <section className="h-screen border-none" id="home">
        <div className="container mx-auto animate-scale-up-center">
          <h1 className="flex justify-center text-3xl sm:text-6xl text-white font-medium pt-24 md:pt-40 mb-2">
            Yoh Otsuka
          </h1>
          <h2 className="flex justify-center text-white text-lg sm:text-2xl mb-12 leading-relaxed">
            Thank you for coming!
          </h2>
          <div className="flex justify-center">
            <img
              className="sm:w-64 w-48 hover:-translate-y-2 hover:-rotate-30 duration-300 ease-in-out"
              src={main_icon}
            ></img>
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 min-h-screen border-t border-none"
        // className="text-gray-700 border-t border-gray-200 bg-white"
        id="about"
      >
        <div className="container px-5 pt-20 pb-6 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              About Me
            </h1>
            <p className="pb-4">
              大阪公立大学大学院 情報学研究科 基幹情報学専攻 知能情報学分野
              知能メディア処理研究室
            </p>
          </div>
          <div className="leading-relaxed">
            <p>
            東京生まれ、兵庫県神戸市育ち
              <br />
              2023年4月から大学近くで下宿を始めました！
              <br />
              研究室では、「文章生成AIや画像生成AIを用いた英語学習」について研究を行っています
              <br />
              とにかく体験することが大好きです！
              スポーツやアウトドア、ゲームなど、見るだけでは満足できずに勝手に体が動いてしまう性格です！
            </p>
          </div>
          <div class=" py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <CardVolleyBall/>
                <CardActivity/>
                <CardIllustration/>
                <CardRamen />
                {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="サイクリング" />
                <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="イラスト" /> */}
                {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="アニメ・漫画" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <AboutMeSlider /> */}
      </section>

      <section
        className="text-gray-700 min-h-screen border-t border-none"
        // className="text-gray-700 border-t border-gray-200 bg-white"
        id="works"
      >
        <div className="container px-5 py-20 mx-auto">
          <div className="flex justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-medal-2"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 3h6l3 7l-6 2l-6 -2z"></path>
              <path d="M12 12l-3 -9"></path>
              <path d="M15 11l-3 -8"></path>
              <path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
            </svg>
          </div>
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              Works
            </h1>
            <p className="pb-1">これまでに作ったものを載せていきます
            <br />順次追加していきます
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap justify-center">
            <CardPortfolio />
          </div>
        </div>
      </section>


      <section
        className="text-gray-700 min-h-screen border-t border-none"
        // className="text-gray-700 border-t border-gray-200 bg-white"
        id="career"
      >
        <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              Career
            </h1>
            <p className="pb-1">
              開発途中です
            </p>
          </div>
        </div>
      </section>


      <section className="text-white border-b border-gray-200 bg-blue-400">
        <div className="container flex mx-auto p-4 flex-col md:flex-row items-center">
          <p className="mb-1">©︎ 2023 Yoh Otsuka</p>
          <div className="flex md:ml-auto">
            <a href="https://github.com/Yoh-lab" className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href="mailto:otsuka20001220@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

//スクロール発火イベント
//https://1-notes.com/javascript-change-background-color-on-scrolling/
//http://www.netyasun.com/home/color.html
window.addEventListener("scroll", function () {
  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  // console.log(scroll+"  "+window.innerHeight)
  if (scroll > 4 * window.innerHeight) {
    document.body.style.backgroundColor = "#FFC0CB";
    document.getElementById('head').style.backgroundColor = "#B5850C40"
    // console.log("赤");
  } else if (scroll >= 3 * window.innerHeight) {
    document.body.style.backgroundColor = "#FFC0CB";
    document.getElementById('head').style.backgroundColor = "#B5850C40"
    // console.log("赤");
  } else if (scroll >= 2 * window.innerHeight) {
    document.body.style.backgroundColor = "#FBCF62";
    document.getElementById('head').style.backgroundColor = "#B5850C40"
    // console.log("オレンジ");
  } else if (scroll >= window.innerHeight) {
    document.body.style.backgroundColor = "#82D5FB";
    document.getElementById('head').style.backgroundColor = "#B5850C40"
    // console.log("青");
  } else {
    document.body.style.backgroundColor = "#4EF5CF";
    document.getElementById('head').style.backgroundColor = "#00000040"
    // console.log("緑");
  }
});

//スムーススクロールの動作を実装
window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});
