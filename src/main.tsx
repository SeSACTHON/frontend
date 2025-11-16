import App from '@/App.tsx';
import '@/style/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 화면 캐싱 기능 임시 해제 */}
    {/* <AliveScope> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </AliveScope> */}
  </StrictMode>,
);
