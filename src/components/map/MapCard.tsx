import SuperBinIcon from '@/assets/icons/icon_superbean_2.svg';
import ZeroWasteIcon from '@/assets/icons/icon_zerowaste_2.svg';
import TempIcon from '@/assets/icons/icon_x.svg';
import type { MapCardType } from '@/types/MapTypes';

const ICONS = {
  superBin: SuperBinIcon,
  zeroWaste: ZeroWasteIcon,
};

const InfoItem = ({
  icon,
  alt,
  text,
}: {
  icon: string;
  alt: string;
  text: string;
}) => {
  return (
    <div className='flex items-center gap-1'>
      <img src={icon} alt={alt} className='h-3 w-3' />
      <span>{text}</span>
    </div>
  );
};

interface MapCardProps {
  location: MapCardType;
  selectedLocationId: number | null;
  setSelectedLocationId: (id: number | null) => void;
}

export const MapCard = ({
  location,
  selectedLocationId,
  setSelectedLocationId,
}: MapCardProps) => {
  const isSelected = selectedLocationId === location.id;
  const IconSrc = ICONS[location.type] ?? ZeroWasteIcon;

  return (
    <div
      key={location.id}
      className={`cursor-pointer rounded-2xl border-2 bg-white p-4 transition-all hover:shadow-md ${
        isSelected
          ? 'border-brand-primary bg-green-50 shadow-md'
          : 'hover:border-brand-primary border-gray-200'
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedLocationId(location.id);
      }}
    >
      <div className='flex items-start gap-3'>
        <div className='flex items-center justify-center'>
          <img src={IconSrc} alt={location.type} className='h-12 w-12' />
        </div>

        <div className='flex-1'>
          <div className='mb-1 flex items-start justify-between'>
            <div>
              <p className='text-text-primary mb-[3px] text-[15px] leading-6 font-semibold tracking-tight'>
                {location.name}
              </p>
              <p className='text-text-secondary text-xs'>
                {location.description}
              </p>
            </div>
            <span className='shrink-0 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700'>
              {location.distance}
            </span>
          </div>

          <div className='flex items-center gap-4 text-xs text-gray-500'>
            {/* TODO: ICON 변경 필요 */}
            <InfoItem icon={TempIcon} text={location.hours} alt='운영 시간' />
            <InfoItem icon={TempIcon} text={location.phone} alt='전화번호' />
          </div>
        </div>
      </div>
    </div>
  );
};
