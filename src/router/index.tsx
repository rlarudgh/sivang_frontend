import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LoginPage from '../page/login';
import MainPage from '../page/main';
import WritePage from '../page/write';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<div>Error</div>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
