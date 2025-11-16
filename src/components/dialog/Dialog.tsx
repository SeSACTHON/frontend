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

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
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
            <p className='mt-2 mb-3 text-center text-[11px] whitespace-pre-line text-gray-600'>
              {description}
            </p>
          )}

          {/* 커스텀 컨텐츠 (체크박스 등) */}
          {content}
        </div>

        {/* 구분선 */}
        <div className='h-px w-full bg-[rgba(60,60,67,0.29)]' />

        {/* 버튼 영역 */}
        <div className='flex h-10 divide-x divide-[rgba(60,60,67,0.29)]'>
          <button
            onClick={onClose}
            className='text-text-secondary flex-1 text-[11px] font-medium transition-colors hover:text-gray-900'
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className='text-brand-primary flex-1 text-[11px] font-extrabold transition-colors hover:text-green-800'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
