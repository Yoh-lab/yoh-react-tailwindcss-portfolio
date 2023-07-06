import React, { useState, useEffect } from "react";
import axios from "axios";
// import requests from "./Requests";

export default function Showname() {
  const baseURL = axios.get({
    baseURL: "http://127.0.0.1:5000",
  });

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(requests.fetchTrending);
  //       setMovie(response.data.results);
  //       return response;
  //     }

  //     fetchData();
  //   }, []);
  const [message, setMessage] = useState("");
  const handleClick = () => {
    axios
      .get("http://127.0.0.1:5000/Otsuka")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
    // setMessage("ボタンがクリックされました！");
  };

  return (
    <div class="items-center justify-center">
      <h1>temaraeno</h1>
      <button onClick={handleClick}>ボタンです。</button>
    </div>
  );
}
