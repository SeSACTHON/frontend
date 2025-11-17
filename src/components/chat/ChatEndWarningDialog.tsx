import { useState } from 'react';
import { Dialog } from '@/components/dialog/Dialog';

interface ChatEndWarningDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ChatEndWarningDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: ChatEndWarningDialogProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    // TODO: 체크박스 체크 여부에 따라 처리
    onConfirm();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title='채팅을 종료 하시겠습니까?'
      description={`이코의의 채팅을 종료할 시 기록이 저장되지\n않습니다. 나가시겠습니까?`}
      content={
        <label className='text-text-secondary mx-auto flex items-center justify-center gap-1 text-[10px]'>
          {/* TODO: 체크박스 icon으로 수정 */}
          <input
            type='checkbox'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className='border-text-inactive h-4 w-4 rounded'
          />
          앞으로 이 메시지를 표시하지 않기
        </label>
      }
      confirmText='나가기'
      cancelText='머무르기'
    />
  );
};
