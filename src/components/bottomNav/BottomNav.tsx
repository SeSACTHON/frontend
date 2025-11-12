import { NavLink } from 'react-router-dom';
import home_active from '@/assets/icons/bottomNav/home_active.svg';
import info_active from '@/assets/icons/bottomNav/info_active.svg';
import map_active from '@/assets/icons/bottomNav/map_active.svg';
import home from '@/assets/icons/bottomNav/home.svg';
import chat from '@/assets/icons/bottomNav/chat.svg';
import info from '@/assets/icons/bottomNav/info.svg';
import map from '@/assets/icons/bottomNav/map.svg';
import camera from '@/assets/icons/bottomNav/camera.svg';

const BottomNav = () => {
  const tabs = [
    {
      path: '/home',
      label: 'HOME',
      icon: home,
      activeIcon: home_active,
      margin: '',
    },
    { path: '/chat', label: 'CHAT', icon: chat, margin: 'mr-8' },
    { path: '/camera', label: 'CAMERA', icon: camera, isCenter: true },
    {
      path: '/info',
      label: 'INFO',
      icon: info,
      activeIcon: info_active,
      margin: 'ml-8',
    },
    {
      path: '/map',
      label: 'MAP',
      icon: map,
      activeIcon: map_active,
      margin: '',
    },
  ];

  const bottomItem = (
    label: string,
    icon: string,
    activeIcon: string,
    isActive: boolean,
    margin: string = '',
  ) => {
    return (
      <div
        className={`h-bottom-nav flex w-14 flex-col items-center justify-end gap-1 pb-6 ${margin}`}
      >
        <img
          src={isActive && activeIcon ? activeIcon : icon}
          alt={label}
          className='h-6 w-6 transition-all duration-150'
        />
        <span
          className={`text-[10px] font-bold ${
            isActive ? 'text-brand-primary' : 'text-text-inactive'
          }`}
        >
          {label}
        </span>
      </div>
    );
  };

  return (
    <nav className='h-bottom-nav max-w-app fixed left-1/2 z-1000 flex w-full -translate-x-1/2 items-center justify-between border-t border-gray-200 bg-white px-10 shadow-[0_-3px_25px_rgba(0,0,0,0.20)]'>
      {tabs.map(({ path, label, icon, activeIcon, isCenter, margin }) => (
        <NavLink
          key={path}
          to={path}
          className='relative flex flex-col items-center text-center'
        >
          {({ isActive }) =>
            isCenter ? (
              <div className='bg-brand-primary absolute bottom-0 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105'>
                <img src={camera} alt={label} className='h-7 w-7' />
              </div>
            ) : (
              bottomItem(label, icon, activeIcon ?? '', isActive, margin)
            )
          }
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
