// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const ModalProvider = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // console.log("modal has opened");
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
    <isModalOpenContext.Provider value={{ isModalOpen, setModalOpen }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </isModalOpenContext.Provider>
  );
};

const isModalOpenContext = createContext({ isModalOpen: false, setModalOpen: () => {} });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider />
);

export default isModalOpenContext;