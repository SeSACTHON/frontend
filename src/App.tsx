import { Routes, Route, Navigate } from 'react-router-dom';
import KeepAlive from 'react-activation';

import { AuthProvider } from './context/Auth/AuthProvider';

import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Info from './pages/Info/Info';
import Map from './pages/Map/Map';
import AppLayout from './pages/App/AppLayout';
import Camera from './pages/Camera/Camera';

const App = () => (
  <AuthProvider>
    <Routes>
      <Route index element={<Splash />} />
      <Route path='/login' element={<Login />} />

      <Route path='/' element={<AppLayout />}>
        <Route
          path='home'
          element={
            <KeepAlive id='home'>
              <Home />
            </KeepAlive>
          }
        />
        <Route
          path='chat'
          element={
            <KeepAlive id='chat'>
              <Chat />
            </KeepAlive>
          }
        />
        <Route
          path='camera'
          element={
            <KeepAlive id='camera'>
              <Camera />
            </KeepAlive>
          }
        />
        <Route
          path='info'
          element={
            <KeepAlive id='info'>
              <Info />
            </KeepAlive>
          }
        />
        <Route
          path='map'
          element={
            <KeepAlive id='map'>
              <Map />
            </KeepAlive>
          }
        />
      </Route>
      {/* 잘못된 경로 진입 시 → 스플래시로 이동 */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </AuthProvider>
);

export default App;
