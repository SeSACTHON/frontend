import { BottomSheet } from '@/components/bottomSheet/BottomSheet';
import { MapCardList } from './MapCardList';
import { EcoHelperCard } from './EcoHelperCard';

interface MapBottomSheetProps {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

const header = (
  <div id='title' className='mb-3 gap-1'>
    <h2 className='text-text-primary text-[17px] leading-6 font-semibold'>
      친환경 장소
    </h2>
    <p className='text-text-secondary text-xs leading-4'>
      가까운 곳부터 보여드릴게요
    </p>
  </div>
);

const children = ({ selectedId, setSelectedId }: MapBottomSheetProps) => (
  <>
    <MapCardList
      selectLocationId={selectedId}
      setSelectLocationId={setSelectedId}
    />
    <EcoHelperCard />
  </>
);

export const MapBottomSheet = ({
  selectedId,
  setSelectedId,
}: MapBottomSheetProps) => {
  return (
    <BottomSheet isOpen header={header} onClick={() => setSelectedId(null)}>
      {children({ selectedId, setSelectedId })}
    </BottomSheet>
  );
};
