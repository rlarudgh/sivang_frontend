import ReactDOM from "react-dom/client";
import StyleProvider from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./page/login";
import MainPage from "./page/main";

const App = () => {
  return (
    <StyleProvider>
      <RecoilRoot>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StyleProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
