import { Dialog } from '@/components/dialog/Dialog';
import { useState } from 'react';

export default function Home() {
  const [dialog1, setDialog1] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const [dialog3, setDialog3] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='h-full bg-gray-100 p-8'>
      <h1 className='mb-8 text-2xl font-bold'>Dialog 사용 예시</h1>

      <div className='space-y-4'>
        <button
          onClick={() => setDialog1(true)}
          className='rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600'
        >
          Popup #1 - 정보 다이얼로그
        </button>

        <button
          onClick={() => setDialog2(true)}
          className='rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600'
        >
          Popup #2 - 체크박스 다이얼로그
        </button>

        <button
          onClick={() => setDialog3(true)}
          className='rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600'
        >
          Popup #3 - 단일 버튼
        </button>
      </div>

      {/* Popup #1: 정보 안내 (파란 테두리) */}
      <Dialog
        isOpen={dialog1}
        onClose={() => setDialog1(false)}
        onConfirm={() => console.log('확인 클릭')}
        title="'이코에코'이(가) 카메라에 접근하려고 합니다"
        description={`사진 촬영을 위해 카메라 접근 권한이 필요합니다.\n브라우저 설정에서 카메라 권한을 허용해주세요.`}
        confirmText='확인'
        cancelText='허용 안 함'
      />

      {/* Popup #2: 체크박스 포함 */}
      <Dialog
        isOpen={dialog2}
        onClose={() => setDialog2(false)}
        onConfirm={() => console.log('나가기 클릭, 체크:', isChecked)}
        title='채팅을 종료 하시겠습니까?'
        description={`이코의의 채팅을 종료할 시 기록이 저장되지\n않습니다.나가시겠습니까?`}
        content={
          <label className='text-text-secondary flex items-center gap-1 text-[10px]'>
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

      <Dialog
        isOpen={dialog3}
        onClose={() => setDialog3(false)}
        onConfirm={() => console.log('로그아웃')}
        title='로그아웃 하시겠어요?'
        confirmText='로그아웃'
        cancelText='취소'
      />
    </div>
  );
}
