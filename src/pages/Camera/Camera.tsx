import CameraContainer from '@/assets/images/camera/camera_container.png';
import { PermissionModal } from '@/components/camera/PermissionModal';
import { useCamera } from '@/hooks/useCamera';
import { useCameraCapture } from '@/hooks/useCameraCapture';
import { useNavigate } from 'react-router-dom';

const Camera = () => {
  const navigate = useNavigate();

  const {
    videoRef,
    canvasRef,
    containerRef,
    isVideoReady,
    permissionDenied,
    startCamera,
    stopCamera,
  } = useCamera();

  const { captureImage } = useCameraCapture({
    videoRef,
    canvasRef,
    containerRef,
    isVideoReady,
  });

  const handleCapture = () => {
    const imageUrl = captureImage();
    if (!imageUrl) return;

    // TODO: axios.post(imageUrl)
    console.log('📤 서버 전송 예정:', imageUrl);

    stopCamera();
    navigate('/camera/answer');
  };

  const handleRetry = () => {
    startCamera();
  };

  return (
    <div className='h-full w-full bg-[#1A1A2E]'>
      {permissionDenied && <PermissionModal onRetry={handleRetry} />}

      <div ref={containerRef} className='relative h-full overflow-hidden'>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className='h-full w-full object-cover'
        />

        <div className='absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 text-center'>
          <img
            src={CameraContainer}
            alt='camera_container'
            className='mx-auto h-[200px] w-[200px] object-contain'
          />
          <p className='mt-14 text-sm leading-7 whitespace-pre-line text-white'>
            {'사물이 잘 보이게 찍어주세요.\n어떤 쓰레기인지 바로 알려드릴게요!'}
          </p>
        </div>

        <div className='absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer'>
          <div
            role='button'
            onClick={handleCapture}
            className='flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#D1D5DC] bg-white'
            aria-label='사진 촬영'
          />
        </div>

        <canvas ref={canvasRef} className='hidden' />
      </div>
    </div>
  );
};

export default Camera;
