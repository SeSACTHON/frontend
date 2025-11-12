import { NavLink } from 'react-router-dom';
import homeActive from '@/assets/icons/home_active.svg';
import infoActive from '@/assets/icons/info_active.svg';
import mapActive from '@/assets/icons/map_active.svg';
import homeInActive from '@/assets/icons/home_inactive.svg';
import infoInActive from '@/assets/icons/info_inactive.svg';
import mapInActive from '@/assets/icons/map_inactive.svg';
import chatInActive from '@/assets/icons/chat_inactive.svg';
import camera from '@/assets/images/camera/camera.png';

const BottomNav = () => {
  const tabs = [
    {
      path: '/home',
      label: 'HOME',
      icon: homeInActive,
      activeIcon: homeActive,
      margin: '',
    },
    { path: '/chat', label: 'CHAT', icon: chatInActive, margin: 'mr-8' },
    { path: '/camera', label: 'CAMERA', icon: camera, isCenter: true },
    {
      path: '/info',
      label: 'INFO',
      icon: infoInActive,
      activeIcon: infoActive,
      margin: 'ml-8',
    },
    {
      path: '/map',
      label: 'MAP',
      icon: mapInActive,
      activeIcon: mapActive,
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
              <div className='absolute bottom-0 flex h-14 w-14 items-center justify-center transition-transform hover:scale-105'>
                <img src={icon} alt={label} />
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
