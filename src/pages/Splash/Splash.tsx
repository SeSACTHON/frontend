import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Logo from '@/assets/images/mainCharacter/app_logo.png';

const Splash = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate('/home', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, navigate]);

  return (
    <div className='bg-brand-secondary flex h-full w-full items-center justify-center'>
      <img src={Logo} alt='logo' className='h-[119px] w-[119px]' />
    </div>
  );
};

export default Splash;
