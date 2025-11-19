import AppHeader from '@/components/AppHeader/AppHeader';
import BottomNav from '@/components/bottomNav/BottomNav';
import { Outlet, useLocation } from 'react-router-dom';

const AppLayout = () => {
  const { pathname } = useLocation();
  const hideBottomNavPaths = ['/chat', '/camera', '/camera/answer'];
  const showBottomNav = !hideBottomNavPaths.some((path) =>
    pathname.startsWith(path),
  );

  const showAppHeaderPaths = ['/chat'];
  const showAppHeader = showAppHeaderPaths.some((path) =>
    pathname.startsWith(path),
  );

  return (
    <div className='overflow-hidde relative h-full w-full'>
      {/* 화면 캐싱 기능 임시 해제 */}
      {showAppHeader && <AppHeader />}

      {/* <KeepAlive id={location.pathname.split('/')[1]}> */}
      <div
        className='absolute right-0 left-0 overflow-y-auto'
        style={{
          top: showAppHeader ? 'var(--height-app-header)' : 0,
          bottom: showBottomNav ? 'var(--height-bottom-nav)' : 0,
        }}
      >
        <Outlet />
      </div>
      {/* </KeepAlive> */}
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
