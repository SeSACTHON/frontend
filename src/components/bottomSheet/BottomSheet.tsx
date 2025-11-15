import { motion, type PanInfo, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';

const VELOCITY_THRESHOLD = 500; // 속도 임계값 : 500 이상이면 빠른 스와이프로 판단
const OFFSET_THRESHOLD = 50; // 이동 거리 임계값 : 실수로 살짝 움직인 것 방지

interface BottomSheetProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  initialHeight?: number; // 초기 높이 (%, 기본값: 30)
  minHeight?: number; // 최소 높이 (%, 0이면 완전히 닫을 수 있음, 기본값: 0)
  maxHeight?: number; // 최대 높이 (%, 기본값: 100)
  snapPoints?: number[]; // 스냅 포인트들 (%, 예: [30, 60, 100])
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  initialHeight = 30,
  minHeight = 0,
  maxHeight = 100,
  snapPoints = [30, 60, 100],
}: BottomSheetProps) => {
  const controls = useAnimation();
  const sheetRef = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);

  const closable = minHeight === 0;

  useEffect(() => {
    if (!isOpen) {
      controls.start({ y: '100%' });
      return;
    }

    const targetHeight = Math.max(initialHeight, minHeight);
    controls.start({ y: `${100 - targetHeight}%` });
    setCurrentHeight(targetHeight);
  }, [isOpen, initialHeight, minHeight, controls]);

  const getParentHeight = useCallback(() => {
    return (
      sheetRef.current?.parentElement?.clientHeight || window.innerHeight - 83
    );
  }, []);

  const calculateDragPercentage = useCallback(
    (clientY: number) => {
      if (!sheetRef.current) return currentHeight;

      const parentHeight = getParentHeight();
      const parentTop =
        sheetRef.current.parentElement?.getBoundingClientRect().top || 0;

      const relativeY = clientY - parentTop;
      const bottomPosition = parentHeight - relativeY;
      const percentage = (bottomPosition / parentHeight) * 100;

      return Math.max(minHeight, Math.min(maxHeight, percentage));
    },
    [currentHeight, minHeight, maxHeight],
  );

  const findClosestSnapPoint = useCallback(
    (height: number) => {
      const validPoints = snapPoints.filter((point) => point >= minHeight);
      return validPoints.reduce((closest, point) =>
        Math.abs(point - height) < Math.abs(closest - height) ? point : closest,
      );
    },
    [minHeight, snapPoints],
  );

  const handleDrag = (_: any, info: PanInfo) => {
    const percentage = calculateDragPercentage(info.point.y);
    controls.set({ y: `${100 - percentage}%` });
    setCurrentHeight(percentage);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (
      closable &&
      info.velocity.y > VELOCITY_THRESHOLD &&
      info.offset.y > OFFSET_THRESHOLD
    ) {
      // 빠른 속도로 아래로 드래그하면 닫기
      onClose?.();
      return;
    }

    if (
      closable &&
      currentHeight < minHeight + (snapPoints[0] - minHeight) * 0.5
    ) {
      // 최소 높이의 절반보다 낮으면 닫기
      onClose?.();
      return;
    }

    // 가장 가까운 스냅 포인트로 이동
    const targetHeight = findClosestSnapPoint(currentHeight);
    controls.start({ y: `${100 - targetHeight}%` });
    setCurrentHeight(targetHeight);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      ref={sheetRef}
      drag='y'
      dragElastic={0}
      dragMomentum={false}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ y: '100%' }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
      }}
      className='max-w-app absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 touch-none flex-col rounded-t-4xl bg-white shadow-2xl'
      style={{ height: `${maxHeight}%` }}
    >
      {/* 드래그 핸들 */}
      <div className='flex cursor-grab touch-none justify-center pt-3 pb-[14px] active:cursor-grabbing'>
        <div className='h-1.5 w-12 rounded-full bg-gray-300' />
      </div>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <div
        className='no-scrollbar h-[calc(100%-2rem)] touch-pan-y overflow-y-auto px-6 pb-3'
        onTouchStart={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>
  );
};
