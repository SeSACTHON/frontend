/*
 * 권한 거부 모달 컴포넌트
 */
export const PermissionModal = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'>
      <div className='w-full max-w-sm rounded-lg bg-white p-6 text-center'>
        <h2 className='mb-2 text-xl font-bold'>카메라 권한이 필요합니다</h2>
        <p className='mb-6 font-bold text-gray-600'>
          사진을 촬영하려면 카메라 접근 권한이 필요합니다.
          <br />
          브라우저 설정에서 카메라 권한을 허용해주세요.
        </p>
        <button
          onClick={onRetry}
          className='w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600'
        >
          다시 시도
        </button>
        <div className='mt-4 text-sm text-gray-500'>
          <p className='mb-1 font-semibold'>권한 설정 방법:</p>
          <p>브라우저 주소창 왼쪽의 자물쇠 아이콘을 클릭하여</p>
          <p>카메라 권한을 '허용'으로 변경해주세요.</p>
        </div>
      </div>
    </div>
  );
};
