import { useState, useRef, useEffect } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialHeight?: number; // 초기 높이 (vh 단위, 기본값: 90)
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  initialHeight = 90,
}: BottomSheetProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [translateY, setTranslateY] = useState(100);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTranslateY(isOpen ? 100 - initialHeight : 100);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen, initialHeight]);

  const handleStart = (clientY: number) => {
    const isAtTop = contentRef.current?.scrollTop === 0;
    if (!isAtTop) return;

    setIsDragging(true);
    setStartY(clientY);
  };

  const handleMove = (clientY: number) => {
    if (!isDragging) return;
    const delta = clientY - startY;
    const initialTranslate = 100 - initialHeight;
    if (delta > 0)
      setTranslateY(initialTranslate + (delta / window.innerHeight) * 100);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const initialTranslate = 100 - initialHeight;
    if (translateY > initialTranslate + 30) {
      onClose();
    } else {
      setTranslateY(initialTranslate);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      className='max-w-app scrollbar-hide fixed right-0 bottom-0 left-0 z-50 mx-auto h-[90vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl'
      style={{
        transform: `translateY(${translateY}%)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease-out',
      }}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseMove={(e) => isDragging && handleMove(e.clientY)}
      onMouseUp={handleEnd}
    >
      <div className='sticky top-0 z-10 bg-white pt-4 pb-2'>
        <div className='mx-auto h-1.5 w-12 rounded-full bg-gray-300' />
      </div>
      <div className='px-6 pb-6'>{children}</div>
    </div>
  );
};
