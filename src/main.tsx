import ReactDOM from "react-dom/client";
import StyleProvider from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Test from "./page/test";

const App = () => {
  return (
    <StyleProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StyleProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
