import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '../../components/bottomNav/BottomNav';

const AppLayout = () => {
  const location = useLocation();

  const hideBottomNavPaths = ['/chat', '/camera'];
  const showBottomNav = !hideBottomNavPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <div
      id='root'
      className='h-full w-full overflow-x-hidden'
      style={{
        paddingBottom: showBottomNav ? 'var(--height-bottom-nav)' : '0px',
      }}
    >
      <Outlet />
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
