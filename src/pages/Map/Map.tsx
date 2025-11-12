import superPinMarker from '@/assets/icons/icon_superbean.svg';
import userMarker from '@/assets/icons/my_location.svg';
import zeroWasteMarker from '@/assets/icons/icon_zerowaste.svg';
import { DEFAULT_CENTER, useGeolocation } from '@/hooks/useGeolocation';
import useKakaoLoaderOrigin from '@/hooks/useKakaoLoaderOrigin';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Map = () => {
  useKakaoLoaderOrigin();

  const { position, error, isLoading, tempPositions } = useGeolocation();

  return (
    <div className='relative h-full w-full'>
      <KakaoMap
        id='map'
        center={position ?? DEFAULT_CENTER}
        className='h-full w-full'
        level={3}
      >
        <>
          {/* 사용자 현재 위치 표시 */}
          {position && (
            <MapMarker
              position={position}
              image={{
                src: userMarker,
                size: { width: 48, height: 48 },
              }}
            />
          )}

          {/* 근처 제로 웨이스트샵 및 수퍼빈 표시 (임시 데이터) */}
          {tempPositions.length > 0 &&
            tempPositions.map((position, index) => (
              <MapMarker
                key={index}
                position={position}
                image={{
                  src: index % 2 === 0 ? zeroWasteMarker : superPinMarker,
                  size: { width: 40, height: 40 },
                }}
                onClick={() => console.log(position)}
              />
            ))}
        </>
      </KakaoMap>

      {/* 위치 로딩 중 표시 */}
      {isLoading && (
        <div className='absolute top-3 left-1/2 -translate-x-1/2 rounded bg-white/90 px-4 py-2 text-sm shadow-md'>
          📍 위치 정보 가져오는 중...
        </div>
      )}

      {/* 에러 메시지 표시 */}
      {error && (
        <div className='absolute top-3 left-1/2 -translate-x-1/2 rounded bg-white/90 px-4 py-2 text-sm text-red-500 shadow-md'>
          {error}
        </div>
      )}
    </div>
  );
};

export default Map;
