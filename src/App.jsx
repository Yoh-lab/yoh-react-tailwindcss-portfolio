import { useState } from "react";
import "./App.css";
import "./components/WorksCard";
import CardNigetabi from "./components/contents/CardNigetabi";
import CardPortfolio from "./components/contents/CardPortfolio";
import CardMakeshihi from "./components/contents/CardMakeshihi";
import CardYokete from "./components/contents/CardYokete";
import CardCancelChecker from "./components/contents/CardCancelChecker";
import Header from "./components/Header";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Header />
      {/* <div className="sticky top-0 z-50">
        <header className="text-white border-b border-gray-200 bg-blue-400">
          <div className="flex mx-auto px-4 flex-row items-center">
            <a href="#home" className="">
              <img
                className="md:w-32 w-36 lg:max-w-lg p-4"
                src="/seiyalogo.png"
              ></img>
            </a>

            <button
              onClick={handleMenuOpen}
              type="button"
              className="z-10 space-y-2 ml-auto"
            >
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-white translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-white transition duration-500 ease-in-out"
                }
              />
              <div
                className={
                  openMenu
                    ? "opacity-0 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-white transition duration-500 ease-in-out"
                }
              />
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-white -rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-white transition duration-500 ease-in-out"
                }
              />
            </button>

            <nav
              className={
                openMenu
                  ? "text-left fixed right-0 top-0 w-1/3 md:w-1/6 h-screen flex flex-col justify-start pt-8 px-3 bg-blue-300 rounded-lg duration-300 ease-in-out"
                  : "fixed right-[-100%]"
              }
            >
              <ul className="ml-auto text-xl md:text-3xl p-8">
                <li>
                  <a
                    href="#home"
                    className="mr-5 hover:text-blue-700 duration-300 font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="mr-5 hover:text-blue-700 duration-300 font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="mr-5 hover:text-blue-700 duration-300 font-medium"
                  >
                    Works
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div> */}

      {/* <section className=" bg-navy h-screen" id="home"> */}
      <section className="h-screen" id="home">
        <div className="container mx-auto animate-scale-up-center">
          <h1 className="flex justify-center text-3xl sm:text-6xl text-white font-medium pt-24 md:pt-40 mb-2">
            Yoh Otsuka
          </h1>
          <h2 className="flex justify-center text-gray-200 text-lg sm:text-2xl mb-12 leading-relaxed">
            Thank you for coming!
          </h2>
          <div className="flex justify-center">
            <img
              className="sm:w-64 w-48 hover:-translate-y-2 hover:-rotate-90 duration-300 ease-in-out"
              src="./usagi_white.svg"
            ></img>
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 border-t h-screen border-gray-200"
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
              兵庫県の但馬という地域で生まれ育ちました。
              現在は大阪に住む大学院生です。
              <br />
              研究室では、「Web検索時のユーザをセンシングするブラウザ拡張機能」の開発をドイツの人工知能研究センター(DFKI)と共同で行っています。
              <br />
              創ることが好きで、アプリケーション、音楽、ゲームなど様々な開発に挑戦中です!
            </p>
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 border-t h-screen border-gray-200"
        // className="text-gray-700 border-t border-gray-200 bg-white"
        id="skills"
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
              兵庫県の但馬という地域で生まれ育ちました。
              現在は大阪に住む大学院生です。
              <br />
              研究室では、「Web検索時のユーザをセンシングするブラウザ拡張機能」の開発をドイツの人工知能研究センター(DFKI)と共同で行っています。
              <br />
              創ることが好きで、アプリケーション、音楽、ゲームなど様々な開発に挑戦中です!
            </p>
          </div>
          <div class=" py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                {/* <!-- article - start --> */}
                <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                  <a
                    href="#"
                    class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </a>

                  <div class="flex flex-1 flex-col p-4 sm:p-6">
                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                      <a
                        href="#"
                        class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        New trends in Tech
                      </a>
                    </h2>

                    <p class="mb-8 text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text. It shares some characteristics of a
                      real written text.
                    </p>

                    <div class="mt-auto flex items-end justify-between">
                      <div class="flex items-center gap-2">
                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                          <img
                            src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                            loading="lazy"
                            alt="Photo by Brock Wegner"
                            class="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div>
                          <span class="block text-indigo-500">Mike Lane</span>
                          <span class="block text-sm text-gray-400">
                            July 19, 2021
                          </span>
                        </div>
                      </div>

                      <span class="rounded border px-2 py-1 text-sm text-gray-500">
                        Article
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- article - end --> */}

                {/* <!-- article - start --> */}
                <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                  <a
                    href="#"
                    class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </a>

                  <div class="flex flex-1 flex-col p-4 sm:p-6">
                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                      <a
                        href="#"
                        class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Working with legacy stacks
                      </a>
                    </h2>

                    <p class="mb-8 text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text. It shares some characteristics of a
                      real written text.
                    </p>

                    <div class="mt-auto flex items-end justify-between">
                      <div class="flex items-center gap-2">
                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                          <img
                            src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                            loading="lazy"
                            alt="Photo by peter bucks"
                            class="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div>
                          <span class="block text-indigo-500">
                            Jane Jackobs
                          </span>
                          <span class="block text-sm text-gray-400">
                            April 07, 2021
                          </span>
                        </div>
                      </div>

                      <span class="rounded border px-2 py-1 text-sm text-gray-500">
                        Article
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- article - end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 border-t border-gray-200"
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
            <p className="pb-1">これまでに作ったものを何でも載せています</p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap justify-center">
            <CardNigetabi />
            <CardPortfolio />
            <CardMakeshihi />
            <CardYokete />
            <CardCancelChecker />
          </div>
        </div>
      </section>

      <footer className="text-white border-b border-gray-200 bg-blue-400">
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
      </footer>
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
    // console.log("赤");
  } else if (scroll >= 3 * window.innerHeight) {
    document.body.style.backgroundColor = "#FFC0CB";
    // console.log("赤");
  } else if (scroll >= 2 * window.innerHeight) {
    document.body.style.backgroundColor = "#FBCF62";
    // console.log("オレンジ");
  } else if (scroll >= window.innerHeight) {
    document.body.style.backgroundColor = "#82D5FB";
    // console.log("青");
  } else {
    document.body.style.backgroundColor = "#4EF5CF";
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
