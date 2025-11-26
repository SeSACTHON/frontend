import { useEffect, useState } from 'react';

/**
 * iOS PWA에서 키보드가 나타날 때의 오프셋을 추적하는 커스텀 훅
 * visualViewport API를 사용하여 키보드 높이를 계산합니다.
 * 
 * @returns {number} 키보드로 인한 화면 오프셋 (px)
 */
export const useKeyboardOffset = () => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const updateOffset = () => {
      const offset = window.innerHeight - viewport.height;
      setKeyboardOffset(offset > 0 ? offset : 0);
    };

    // 초기 설정
    updateOffset();

    viewport.addEventListener('resize', updateOffset);
    viewport.addEventListener('scroll', updateOffset);

    return () => {
      viewport.removeEventListener('resize', updateOffset);
      viewport.removeEventListener('scroll', updateOffset);
    };
  }, []);

  return keyboardOffset;
};

