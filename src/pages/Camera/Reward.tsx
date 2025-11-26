import { ResultNavigationBtn } from '@/components/camera/ResultNavigationBtn';
import RewardIcon from '@/assets/images/subCharacter/sub_battery.png';

// TODO: 임시 화면, UI 변경 필요
const Reward = () => {
  return (
    <div className='no-scrollbar max-w-app relative h-full overflow-y-auto px-6'>
      <div className='mt-8 mb-5 flex w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-text-primary text-2xl leading-6 font-semibold tracking-[-0.3px]'>
          새로운 캐릭터 획득 !
        </h1>

        <img
          src={RewardIcon}
          alt='reward'
          className='border-stroke-default mx-auto h-[243px] w-[243px] rounded-[5px] border-2 object-cover'
        />
      </div>

      <div className='mt-auto'>
        <ResultNavigationBtn type='home' />
      </div>
    </div>
  );
};

export default Reward;
