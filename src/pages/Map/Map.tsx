import { useState } from 'react';
import { MapView } from '@/components/map/MapView';
import { MapBottomSheet } from '@/components/map/MapBottomSheet';

const Map = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className='relative h-full w-full overflow-y-hidden'>
      <MapView id={selectedId} />
      <MapBottomSheet selectedId={selectedId} setSelectedId={setSelectedId} />
    </div>
  );
};

export default Map;
