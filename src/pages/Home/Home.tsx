import { BottomSheet } from '@/components/bottomSheet/BottomSheet';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='h-full w-full'>
      <button
        onClick={() => setIsOpen(true)}
        className='rounded-lg bg-blue-500 px-4 py-2 text-white'
      >
        Bottom Sheet 열기
      </button>
      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialHeight={50}
      >
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-900'>
            BottomSheet 콘텐츠
          </h2>

          <p className='text-gray-600'>
            이 영역에 원하는 콘텐츠를 넣을 수 있습니다. 스크롤이 가능하며,
            드래그로 크기를 조절할 수 있습니다.
          </p>

          {/* 예시 콘텐츠 */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className='rounded-lg bg-gray-50 p-4'>
              <h3 className='font-semibold'>항목 {i + 1}</h3>
              <p className='text-sm text-gray-600'>
                스크롤 테스트를 위한 콘텐츠입니다.
              </p>
            </div>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
};

export default Home;
