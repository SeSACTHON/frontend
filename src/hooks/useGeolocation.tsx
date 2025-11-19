import { useEffect, useState } from 'react';
import { DEFAULT_CENTER } from '@/constants/MapConfig';
import type { Position } from '@/types/MapTypes';

interface GeolocationError {
  code: number;
  message: string;
}

interface UseGeolocationReturn {
  position: Position | null;
  error: string | null;
  isLoading: boolean;
  tempPositions: Position[];
}

/**
 * 사용자의 현재 위치를 가져오는 커스텀 훅
 * @returns {UseGeolocationReturn} position, error, isLoading 상태
 */
export const useGeolocation = (): UseGeolocationReturn => {
  const [position, setPosition] = useState<Position>(DEFAULT_CENTER);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('이 브라우저는 위치 정보를 지원하지 않습니다.');
      setIsLoading(false);
      return;
    }

    console.log('🔍 위치 정보 요청 중...');

    const handleSuccess = (pos: GeolocationPosition) => {
      setPosition({
        id: 0,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });

      setError(null);
      setIsLoading(false);
    };

    const handleError = (err: GeolocationError) => {
      console.error('❌ 위치 정보 에러:', err);

      let errorMsg = '위치 정보를 가져올 수 없습니다.';

      // 에러 타입별 상세 메시지
      switch (err.code) {
        case 1: // PERMISSION_DENIED
          errorMsg =
            '위치 권한이 거부되었습니다. 브라우저 설정에서 위치 권한을 허용해주세요.';
          break;
        case 2: // POSITION_UNAVAILABLE
          errorMsg = '위치 정보를 사용할 수 없습니다.';
          break;
        case 3: // TIMEOUT
          errorMsg = '위치 정보 요청 시간이 초과되었습니다.';
          break;
      }

      setError(errorMsg);
      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true, // 높은 정확도 사용
      timeout: 10000, // 10초 타임아웃
      maximumAge: 0, // 캐시된 위치 사용 안 함
    });
  }, []);

  const tempPositions = [
    {
      id: 1,
      lat: position.lat + 0.00055,
      lng: position.lng,
    },
    {
      id: 2,
      lat: position.lat,
      lng: position.lng + 0.00055,
    },
    {
      id: 3,
      lat: position.lat - 0.00055,
      lng: position.lng - 0.00055,
    },
    {
      id: 4,
      lat: position.lat - 0.00055,
      lng: position.lng + 0.00055,
    },
  ];

  return { position, error, isLoading, tempPositions };
};
