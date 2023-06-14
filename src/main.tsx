import ReactDOM from 'react-dom/client';
import { Router } from './router';
import StyleProvider from './styles';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import { getCookie } from './utils/cookie';

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
  useEffect(() => {
    const path: string = window.location.pathname;

    if (path !== '/') {
      const accessToken: string | null = getCookie('accessToken');

      if (!accessToken) {
        alert('로그인이 필요합니다');
        window.location.href = '/';
      }
    }
  }, []);

  return (
    <StyleProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ToastContainer />
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </StyleProvider>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
