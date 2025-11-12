import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseCameraReturn {
  videoRef: RefObject<HTMLVideoElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  isVideoReady: boolean;
  permissionDenied: boolean;
  startCamera: () => Promise<MediaStream | null>;
  stopCamera: () => void;
}

/**
 * 카메라 스트림을 관리하는 커스텀 훅
 * @returns 카메라 제어 함수와 상태들
 */
export const useCamera = (): UseCameraReturn => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const startCamera = async (): Promise<MediaStream | null> => {
    try {
      setPermissionDenied(false);

      const constraints = {
        video: {
          facingMode: { ideal: 'environment' }, // 후면 카메라 우선
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = videoRef.current;

      if (video) {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          setIsVideoReady(true);
          console.log('✅ 카메라 스트림 시작');
        };
      }

      streamRef.current = stream;
      return stream;
    } catch (err) {
      console.error('카메라 오류: ', err);

      if (
        err instanceof DOMException &&
        (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError')
      ) {
        setPermissionDenied(true);
      }

      return null;
    }
  };

  const stopCamera = () => {
    if (!streamRef.current) return;

    streamRef.current.getTracks().forEach((track) => {
      track.stop();
    });

    streamRef.current = null;
    setIsVideoReady(false);
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return {
    videoRef,
    canvasRef,
    containerRef,
    isVideoReady,
    permissionDenied,
    startCamera,
    stopCamera,
  };
};
