import React from "react";
import ReactDOM from "react-dom/client";
import StyleProvider from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./page/test";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
