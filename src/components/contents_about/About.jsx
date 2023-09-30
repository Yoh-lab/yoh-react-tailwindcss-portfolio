import React, { useContext, useState } from "react";
import AboutCard from "./AboutCard";
import { ModalContext } from "../../App";


const About = (props) => {
  const [showHobbyModal, setShowHobbyModal] = React.useState(false);
  const {setModalOpen} = useContext(ModalContext);
  const [selectImg, setSelectImg] = useState(0);
  const handleModalOpen = () => {
    setShowHobbyModal(true);
    setModalOpen(true);
    console.log("hobby modal opened");
  };
  const handleModalClose = () => {
    setShowHobbyModal(false);
    setModalOpen(false);
    console.log("hobby modal closed");
  };

  return (
    <>
      <div onClick={handleModalOpen} className="z-30">
        <button>
          <AboutCard
            title={props.title}
            // comment={props.subtitle}
            thumbnail={props.thumbnail}
            english_title={props.english_title}
          />
        </button>
      </div>
      {showHobbyModal ? (
        <div className="fixed max-w-screen h-screen inset-0 flex items-center justify-center z-50 bg-opacity-40 bg-black">
          <div className="xl:max-w-5xl sm:max-w-6xl max-w-6xl w-full p-4 bg-white rounded-lg flex-col outline-none">
            {/*content*/}
            {/*header*/}
            <div className="border-b border-solid border-slate-200">
              <div className="flex items-center justify-between px-6 pt-4">
                <div className="flex items-center">
                  <h3 className="md:text-3xl text-sm whitespace-nowrap font-semibold text-amber-600">
                    {props.title}
                  </h3>
                  <div className="sm-text-lg text-sm whitespace-nowrap text-left font-semibold text-amber-600 pl-6">
                    {props.date}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-amber-500 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 hover:text-amber-600 hover:-translate-y-1 md:ml-auto"
                    type="button"
                    id="btn2"
                    onClick={handleModalClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 6l-12 12"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="">
              <div className="container py-2 flex-col md:flex-row items-center flex justify-center">
                <div className="md:w-1/2 mb-4 px-4 md:mr-6 text-center">
                  <div className="mb-2">
                    <h3 className="sm:text-2xl text-xl text-amber-600 py-6 font-semibold">
                      詳細
                    </h3>
                    <div className="">
                      {/* <p className="text-gray-500 leading-relaxed text-left">
                      {props.description}
                    </p> */}
                      <h2 className="text-gray-700 code text-left sm:text-xl text-sm">
                        {props.lines.map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 w-3/4 mb-4">
                  <div className="flex mx-auto mb-2 justify-center px-10">
                    <button
                      className="p-2 hover:text-amber-800 text-gray-500 duration-150"
                      onClick={() => setSelectImg(0)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-2 hover:text-amber-800 text-gray-500 duration-150"
                      onClick={() => setSelectImg(1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-2 hover:text-amber-800 text-gray-500 duration-150"
                      onClick={() => setSelectImg(2)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="rounded-lg"
                      src={props.image_list[selectImg]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default About;