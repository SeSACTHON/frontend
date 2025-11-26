import { useNavigate } from 'react-router-dom';
import { Dialog } from '@/components/dialog/Dialog';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutDialog = ({ isOpen, onClose }: LogoutDialogProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('로그아웃');

    // TODO: 로그아웃 로직 구현
    navigate('/login');
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleLogout}
      description='로그아웃 하시겠어요?'
      confirmText='로그아웃'
      cancelText='취소'
    />
  );
};
