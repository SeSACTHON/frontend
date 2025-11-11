import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

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

  return <div className='h-full w-full bg-green-400'>splash</div>;
};

export default Splash;
