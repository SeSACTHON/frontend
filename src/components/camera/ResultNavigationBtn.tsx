import { useNavigate } from 'react-router-dom';
import HomeIcon from '@/assets/icons/home_inactive_white.svg';
import CameraIcon from '@/assets/icons/camera_icon.svg';

const configs = {
  camera: {
    icon: CameraIcon,
    label: '다시 촬영하기',
    path: '/camera',
  },
  home: {
    icon: HomeIcon,
    label: '홈에서 캐릭터 확인하기',
    path: '/home',
  },
};

interface ResultNavigationBtnProps {
  type: 'camera' | 'home';
}

export const ResultNavigationBtn = ({ type }: ResultNavigationBtnProps) => {
  const navigate = useNavigate();
  const { icon, label, path } = configs[type];

  const handleNavigate = () => {
    navigate(path, { replace: true });
  };

  return (
    <button
      className='bg-brand-primary flex h-14.5 w-full cursor-pointer items-center justify-center gap-4 rounded-2xl'
      onClick={handleNavigate}
    >
      <img src={icon} alt={type} />
      <p className='leading7.5 text-[15px] font-semibold tracking-normal text-white'>
        {label}
      </p>
    </button>
  );
};
