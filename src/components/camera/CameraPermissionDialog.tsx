import { Dialog } from '@/components/dialog/Dialog';

interface CameraPermissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const CameraPermissionDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: CameraPermissionDialogProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="'이코에코'이(가) 카메라에 접근하려고 합니다"
      description={`사진 촬영을 위해 카메라 접근 권한이 필요합니다.\n브라우저 설정에서 카메라 권한을 허용해주세요.`}
      confirmText='확인'
      cancelText='허용 안 함'
    />
  );
};
