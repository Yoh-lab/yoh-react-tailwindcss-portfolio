import React from "react";
import WorksCard from "./WorksCard";

const Modal = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectImg, setSelectImg] = React.useState(0);

  return (
    <>
      <div className="flex justify-center md:w-2/5 p-4 md:px-6">
        <button onClick={() => setShowModal(true)}>
          <WorksCard
            title={props.title}
            comment={props.subtitle}
            imgPath={props.thumbnail}
          />
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="container relative my-6 p-4 max-w-6xl lg:max-w-4xl">
              {/*content*/}
              <div className="rounded-lg relative flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="border-b border-solid border-slate-200">
                  <div className="flex items-center justify-between px-6 pt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                      {props.title}
                    </h3>
                    <div className="flex items-center">
                      <div className="text-blue-300 mx-auto px-4">
                        {props.links}
                      </div>
                      <button
                        className="text-blue-300 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 hover:text-blue-500 hover:-translate-y-1 md:ml-auto"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-x"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M18 6l-12 12"></path>
                          <path d="M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-lg text-gray-500 pl-6 mb-2">
                    {props.date}
                  </div>
                </div>
                {/*body*/}
                <div className="">
                  <div className="container py-2 flex-col md:flex-row items-center flex justify-center">
                    <div className="md:w-1/2 mb-4 px-4 md:mr-6 text-center">
                      <div className="mb-2">
                        <h3 className="text-lg text-blue-400 font-semibold">
                          Description
                        </h3>
                        <div className="">
                          <p className="text-gray-500 leading-relaxed text-left">
                            {props.description}
                          </p>
                        </div>
                      </div>
                      <div className="mb-2">
                        <h3 className="text-lg text-blue-400 font-semibold">
                          Skills
                        </h3>
                        <p className="ml-6 text-gray-500 leading-relaxed">
                          {props.skills}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/5 w-3/4 mb-4">
                      <div className="flex mx-auto mb-2 justify-center px-10">
                        <button className="p-2 hover:text-blue-400 text-gray-500 duration-150" onClick={() => setSelectImg(0)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-filled"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                              stroke-width="0"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <button className="p-2 hover:text-blue-400 text-gray-500 duration-150" onClick={() => setSelectImg(1)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-filled"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                              stroke-width="0"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <button className="p-2 hover:text-blue-400 text-gray-500 duration-150" onClick={() => setSelectImg(2)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-filled"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                              stroke-width="0"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-center">
                        <img
                          className="rounded-lg"
                          src={props.imgPaths[selectImg]}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
