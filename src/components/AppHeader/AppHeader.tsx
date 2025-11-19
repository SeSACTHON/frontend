import { useLocation, useNavigate } from 'react-router-dom';
import GoBack from '@/assets/icons/go_back.svg';

const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/chat':
      return '이코';
  }
};

const AppHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className='max-w-app h-app-header absolute top-0 flex w-full items-center pl-7.5'>
      <img
        src={GoBack}
        alt='GoBack'
        onClick={() => navigate(-1)}
        className='h-7.5 w-7.5 cursor-pointer'
      />
      <span className='text-text-primary absolute left-1/2 -translate-x-1/2 text-[18px] leading-8 font-bold tracking-[0.07px]'>
        {getTitle(pathname)}
      </span>
    </div>
  );
};

export default AppHeader;
