import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LoginPage from '@/page/login';
import MainPage from '@/page/main';
import WritePage from '@/page/write';
import MyPage from '@/page/mypage';
import RegularPage from '@/page/regular';
import RecordPage from '@/page/record';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<div>Error</div>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/regular" element={<RegularPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/record" element={<RecordPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
