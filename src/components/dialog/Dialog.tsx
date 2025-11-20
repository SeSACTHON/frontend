import { createPortal } from 'react-dom';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;

  title?: string;
  description?: string;
  content?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
}

export const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  content,
  confirmText = '확인',
  cancelText = '취소',
}: DialogProps) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return createPortal(
    <div className='fixed inset-0 z-1000 flex items-center justify-center bg-black/30'>
      <div className='w-[276px] max-w-sm rounded-[10px] bg-white'>
        <div className='p-5'>
          {/* 제목 */}
          {title && (
            <h2 className='text-text-primary text-center text-xs font-bold'>
              {title}
            </h2>
          )}

          {/* 설명 */}
          {description && (
            <p className='text-text-primary mt-2 text-center text-[11px] leading-4.5 whitespace-pre-line'>
              {description}
            </p>
          )}

          {/* 커스텀 컨텐츠 (체크박스 등) */}
          {content && <div className='mt-3'>{content}</div>}
        </div>

        {/* 구분선 */}
        <div className='h-px w-full bg-[rgba(60,60,67,0.29)]' />

        {/* 버튼 영역 */}
        <div className='flex h-10 divide-x divide-[rgba(60,60,67,0.29)] text-[11px]'>
          <button
            onClick={onClose}
            className='text-text-secondary flex-1 cursor-pointer font-medium'
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className='text-brand-primary flex-1 cursor-pointer font-extrabold'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
