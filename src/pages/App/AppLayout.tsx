import BottomNav from '@/components/bottomNav/BottomNav';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const hideBottomNavPaths = ['/chat', '/camera'];
  const showBottomNav = !hideBottomNavPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <div
      className='h-full w-full overflow-x-hidden'
      style={{
        paddingBottom: showBottomNav ? 'var(--height-bottom-nav)' : '0px',
      }}
    >
      {/* 화면 캐싱 기능 임시 해제 */}
      {/* <KeepAlive id={location.pathname.split('/')[1]}> */}
      <Outlet />
      {/* </KeepAlive> */}
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
