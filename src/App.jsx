//参考
//http://manato.ca/
//https://fukushimanaoki.com/
//https://www.mikeinghamdesign.com/

import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ScrollTop from "./components/ScrollTop";
// import TestPage from "./pages/TestPage";

function App() {
  // // ユーザーの設定に応じたダークモードの優先設定を取得
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // // useMemoフックを使用してテーマを作成
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       // パレットのモードをダークモードまたはライトモードに設定
  //       palette: {
  //         mode: prefersDarkMode ? "dark" : "light",
  //         primary: {
  //           main: "#f0fff2",
  //           extraDark: "#a936e3",
  //           dark: "#c76672",
  //           light: "#ec939d",
  //           extraLight: "#d13bcc",
  //           alpha08: "#0077C714",
  //         },
  //         noticeRed: {
  //           main: "#c06d76",
  //           dark: "#c8a251",
  //           light: "#f7d282",
  //         },
  //       },
  //       typography: {
  //         fontFamily: "Inter, 'Noto Sans JP'",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  return (
    <div className="App">
      <div className="App flex min-h-screen text-center flex-col items-center justify-center">
        {/* アプリケーション全体のテーマを設定するためにThemeProviderを使用 */}
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <div className="">
          {/* ルーティングを設定するためにBrowserRouterを使用 */}
          <BrowserRouter>
            <ScrollTop />
            <Routes>
              {/* ルートパスに対するルート要素としてSignInPageコンポーネントを設定 */}
              <Route path={`/`} element={<HomePage />} />
              {/* <Route path={`/`} element={<TestPage />} /> */}
              {/* /homeパスに対するルート要素としてHomeコンポーネントを設定
                <Route path={`/home`} element={<Test />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
        {/* </ThemeProvider> */}
      </div>
    </div>
  );
}

export default App;
