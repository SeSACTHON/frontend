import { MapTemplateData } from '@/types/MapTypes';
import { MapCard } from './MapCard';

interface MapCardListProps {
  selectLocationId: number | null;
  setSelectLocationId: (id: number | null) => void;
}

export const MapCardList = ({
  selectLocationId,
  setSelectLocationId,
}: MapCardListProps) => {
  return (
    <div className='mb-4 space-y-3'>
      {MapTemplateData.map((location) => (
        <MapCard
          key={location.id}
          location={location}
          selectedLocationId={selectLocationId}
          setSelectedLocationId={setSelectLocationId}
        />
      ))}
    </div>
  );
};
