import React, { useState, useEffect, createContext } from 'react'; // useState, useEffectを追加
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ScrollTop from "./components/ScrollTop";

export const ModalContext = createContext();
// const ModalContext = createContext();

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="App">
      <div className="App flex min-h-screen text-center flex-col items-center justify-center">
        <div className="">
          <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
            <BrowserRouter>
              <ScrollTop />
              <Routes>
                <Route path={`/`} element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </ModalContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;