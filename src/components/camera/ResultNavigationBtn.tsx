import { useNavigate } from 'react-router-dom';
// TODO: 아이콘 변경 필요
import CameraIcon from '@/assets/icons/icon_camera.svg';
import HomeIcon from '@/assets/icons/home_inactive.svg';

const configs = {
  camera: {
    icon: CameraIcon,
    label: '다시 촬영하기',
    path: '/camera',
  },
  reward: {
    // TODO: Label, Icon 변경 필요
    icon: HomeIcon,
    label: '캐릭터 획득하기',
    path: '/camera/reward',
  },
  home: {
    icon: HomeIcon,
    label: '홈에서 캐릭터 확인하기',
    path: '/home',
  },
};

interface ResultNavigationBtnProps {
  type: 'camera' | 'reward' | 'home';
}

export const ResultNavigationBtn = ({ type }: ResultNavigationBtnProps) => {
  const navigate = useNavigate();
  const { icon, label, path } = configs[type];

  const handleNavigate = () => {
    navigate(path, { replace: true });
  };

  return (
    <button
      className='bg-brand-primary flex h-14.5 w-full items-center justify-center gap-4 rounded-2xl'
      onClick={handleNavigate}
    >
      <img src={icon} alt={type} className='h-4.5 w-5' />
      <p className='leading7.5 text-[15px] font-semibold tracking-normal text-white'>
        {label}
      </p>
    </button>
  );
};
