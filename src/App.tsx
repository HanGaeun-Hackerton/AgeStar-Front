import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { GlobalStyle } from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
