import MainCharacter3 from '@/assets/images/mainCharacter/main_3.png';

export const EcoHelperCard = () => {
  return (
    <div className='bg-brand-secondary rounded-2xl border-2 border-[#B9F8CF] p-4'>
      <div className='flex items-start gap-3'>
        <img
          src={MainCharacter3}
          alt='eco_thumbs_up'
          className='h-[68px] w-[68px]'
        />
        <div className='flex flex-col justify-between'>
          <p className='text-text-primary text-[15px] leading-6 font-semibold -tracking-[0.312px]'>
            이코의 팁!
          </p>
          <p className='text-xs leading-5 font-medium text-gray-600'>
            수퍼빈에서는 페트병과 캔을 넣고 포인트를 받을 수 있어요! 제로
            웨이스트 가게에는 리필 용기를 가져가면 더 좋아요.
          </p>
        </div>
      </div>
    </div>
  );
};
