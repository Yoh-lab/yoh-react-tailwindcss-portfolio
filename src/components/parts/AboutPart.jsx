import React from 'react'
import CardVolleyBall from "../contents_about/CardVolleyBall";
import CardActivity from "../contents_about/CardActivity";
import CardIllustration from "../contents_about/CardIllustration";
import CardRamen from "../contents_about/CardRamen";

const AboutPart = () => {
  return (
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
                <CardVolleyBall />
                <CardActivity />
                <CardIllustration />
                <CardRamen />
                {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="サイクリング" />
                  <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="イラスト" /> */}
                {/* <AboutCard img="src/components/contents_about/images/IMG_3878.jpg" text="アニメ・漫画" /> */}
              </div>
            </div>
          </div>
        </div>
  )
}

export default AboutPart