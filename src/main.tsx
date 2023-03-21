import ReactDOM from "react-dom/client";
import StyleProvider from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./page/login";
import MainPage from "./page/main";
import WritePage from "./page/write";
import CyclePage from "./page/cycle";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

const App = () => {
  return (
    <StyleProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/write" element={<WritePage />} />
              <Route path="/cycle" element={<CyclePage />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </StyleProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
