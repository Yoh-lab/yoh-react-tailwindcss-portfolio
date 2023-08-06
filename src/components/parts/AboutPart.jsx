import React from "react";
import face_image from "../icon/FaceImage.png";

const AboutPart = () => {
  const text = `
  2000年12月20日生まれ。兵庫県神戸育ち。大学院から大阪で1人暮らし。

  所属 : 大阪公立大学院 知能メディア処理研究室
  趣味 : バレーボール、アウトドア、SASUKE（いつか出てみたい）
  特技 : イラスト制作、登録者200人の底辺Youtuberです（笑）
`;
  const lines = text.trim().split("\n");

  return (
    <div className="flex-col items-center w-screen">
      <section className="h-screen ">
        <div className=" flex items-center justify-between xl:pt-48 sm:pt-36 pt-36 xl:pb-28 pb-24 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-10/12 w-9/12 mx-auto">
          <div className="flex-col">
            <h1 className="text-gray-700 code font-bold ml-2 text-left  xl:text-3xl md:text-2xl text-2xl">
              おおつか よう
            </h1>
            <h1 className="text-gray-700 code font-bold xl:text-7xl sm:text-5xl text-4xl">
              YOH OTSUKA
            </h1>
          </div>
          <div>
            <img
              className="xl:w-64 sm:w-48 w-32"
              src={face_image}
              alt="Main Icon"
            />
          </div>
        </div>

        <div className="flex items-center xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-10/12 w-9/12 mx-auto">
          <div className="flex-col items-start">
            <h2 className="text-gray-700 code text-left sm:text-2xl text-1xl">
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPart;
