import { CHARACTER_DATA, CHARACTER_LIST } from '@/constants/CharacterInfo';
import type { CharacterKey } from '@/types/CharacterInfoTypes';
import { useState } from 'react';

type CharacterListProps = {
  selectedCharacter?: CharacterKey;
  setSelectedCharacter: (value: CharacterKey) => void;
};

const CharacterList = ({
  selectedCharacter,
  setSelectedCharacter,
}: CharacterListProps) => {
  const [acquiredCharacter, setAcquiredChaCnt] = useState<CharacterKey[]>([]);
  const totalWasteCnt = Object.keys(CHARACTER_DATA).length;

  return (
    <div className='g-6 h-full w-full overflow-auto bg-[#EBFBFF] px-[25px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      {/* 타이틀 */}
      <div className='flex flex-row justify-between pb-6'>
        <span className='text-text-primary text-[17px] leading-6 font-semibold tracking-[-0.312px]'>
          캐릭터 컬렉션
        </span>
        <div className='text-brand-primary flex h-[27px] shrink-0 items-center justify-center gap-[5px] rounded-[18px] border border-[#B9F8CF] bg-[#F0FDF4] px-2.5 py-1.5 text-center text-[12px] leading-6 font-medium tracking-[-0.312px]'>
          <p className='font-extrabold'>
            {acquiredCharacter.length}/{totalWasteCnt}
          </p>
          캐릭터 획득!
        </div>
      </div>

      {/* 캐릭터 리스트 */}
      <div className='grid grid-cols-3 gap-[13px]'>
        {CHARACTER_LIST.map((item) => (
          <div
            key={item.wasteName}
            onClick={() => setSelectedCharacter(item.id)}
            className={`border-brand-primary flex h-[106px] w-[106px] shrink-0 flex-col items-center gap-[11px] rounded-2xl border-[1.352px] pt-4.5 opacity-[0.8] shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition-all duration-200 hover:scale-105 ${selectedCharacter === item.id ? 'bg-brand-secondary' : 'bg-white'} `}
          >
            <img
              src={item.wasteImage}
              alt={item.wasteName}
              className='h-[46px] w-19'
            />
            <p className='font-inter text-text-primary text-center text-[10px] leading-[15px] font-normal tracking-[0.117px]'>
              {item.wasteName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
