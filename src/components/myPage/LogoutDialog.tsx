import { Dialog } from '@/components/dialog/Dialog';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutDialog = ({ isOpen, onClose }: LogoutDialogProps) => {
  const handleLogout = () => {
    // TODO: 로그아웃 처리
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleLogout}
      title='로그아웃 하시겠어요?'
      confirmText='로그아웃'
      cancelText='취소'
    />
  );
};
