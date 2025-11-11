import Can from '@/assets/images/info/can.png';
import CarSmoke from '@/assets/images/info/car-smoke.png';
import RecyclingCheer from '@/assets/images/info/eco-recycling-cheer.png';
import Paper from '@/assets/images/info/paper.png';
import PlasticBottle from '@/assets/images/info/plastic-bottle.png';
import RecyclingBin from '@/assets/images/info/recycling-bin.png';
import TrashBag from '@/assets/images/info/trash-bag.png';
import { useNavigate } from 'react-router-dom';

const tips: string[] = [
  '내용물을 비우고 깨끗이 씻어주세요.',
  '라벨과 뚜껑을 분리해주세요.',
  '종류별로 구분하여 배출해주세요.',
  '지정된 요일과 시간을 지켜주세요.',
  '압축하여 부피를 줄여주세요.',
];

const Info = () => {
  const navigate = useNavigate();
  const handleGoToChat = () => {
    navigate('/chat');
  };

  return (
    <main className='scrollbar-hide relative h-full w-full overflow-y-auto'>
      <div id='container' className='px-6 pt-7 pb-12'>
        <div className='flex flex-col gap-[19px]'>
          <h1 className='flex justify-center gap-[11px] text-2xl leading-8 font-semibold'>
            <span className='text-text-primary'>분리배출,</span>
            <span className='text-brand-primary'>왜 해야할까요?</span>
          </h1>

          <section
            className='flex flex-col items-center gap-[13px] rounded-3xl p-6 text-center'
            style={{
              background: 'linear-gradient(180deg, #F0FDF4 0%, #ECFDF5 100%)',
            }}
          >
            <p className='text-xs leading-5 font-medium text-black'>
              우리가 배출하는 생활폐기물에는 유리, 캔, 페트병처럼 재활용이
              가능한 것들과 휴지나 음식물처럼 재활용이 어려운 것들이 함께 섞여
              있습니다.
            </p>
            <img
              src={RecyclingBin}
              width={242}
              height={89}
              alt='recycling-bin'
            />
          </section>

          <section className='bg-brand-primary flex flex-col gap-[14px] rounded-3xl p-6 text-white'>
            <h3 className='text-xl font-semibold'>폐자원의 순환 재활용 과정</h3>
            <p className='text-xs leading-6 font-medium'>
              깨끗하게 분리배출된 재활용 자원은 선별과 재활용 과정을 거쳐 옷,
              신발, 페트병 등 일상에서 사용하는 새로운 제품으로 다시 태어날 수
              있습니다.
            </p>

            <div className='rounded-2xl bg-white/20 p-4'>
              <div className='mb-3 flex items-center justify-center gap-6'>
                <img
                  src={PlasticBottle}
                  alt='plastic-bottle'
                  className='h-10 w-8'
                />
                <img src={Paper} alt='paper' className='h-10 w-14' />
                <img src={Can} alt='can' className='h-10 w-9' />
              </div>
              <p className='text-center text-[10px]'>재활용 제품의 예시</p>
            </div>
          </section>

          <section className='flex flex-col gap-4 rounded-3xl border-[1.352px] border-[#FFC9C9] p-6'>
            <div className='flex flex-col gap-2 text-center'>
              <span className='text-text-primary mb-2 text-xl font-semibold'>
                하지만...
              </span>
              <p className='text-xs leading-6 font-medium -tracking-[0.15px] text-gray-700'>
                재활용이 가능한 자원이라도{' '}
                <span className='text-[#E7000B]'>
                  일반쓰레기와 함께 종량제 봉투에 버려지거나 이물질이 묻은 채
                  배출되면,{' '}
                </span>
                제대로 재활용되지 못하고 결국{' '}
                <span className='text-[#E7000B]'>소각되거나 매립됩니다.</span>
              </p>
            </div>

            <div className='grid grid-cols-2 gap-[11px]'>
              <div className='flex h-36 flex-col items-center justify-between rounded-2xl border border-[#FFC9C9] bg-[#FEF2F2] px-[17px] pt-[15px] pb-2 text-center'>
                <img src={TrashBag} alt='trash-bag' className='h-13 w-11' />
                <p className='text-[22px] leading-6 font-bold text-[#E7000B]'>
                  3,000억
                </p>
                <p className='text-[9px] leading-3.5 font-normal text-[#4D4D4D]'>
                  종량제봉투 구매비용
                  <br />
                  감소 (약 5억매)
                </p>
              </div>

              <div className='flex h-36 flex-col items-center justify-between rounded-2xl border border-[#FFC9C9] bg-[#FEF2F2] px-[17px] pt-[21px] pb-2 text-center'>
                <img
                  src={CarSmoke}
                  alt='car-smoke'
                  className='h-11 w-[104px]'
                />
                <p className='text-[22px] leading-6 font-bold text-[#E7000B]'>
                  88kg
                </p>
                <p className='text-[9px] leading-3.5 font-normal text-[#4D4D4D]'>
                  1인당 이산화탄소
                  <br />
                  발생량 (연간)
                </p>
              </div>
            </div>

            <aside className='rounded-[14px] bg-[#F9FAFB] p-4'>
              <p className='text-text-primary text-center text-[11px] leading-5 font-normal'>
                올바른 분리배출을 통해 생활폐기물의 재활용률을 높이면, 1인당
                이산화탄소 발생량을 연간 88kg 가량 줄일 수 있으며, 3000억원
                상당의 종량제봉투 약 5억매를 절약할 수 있습니다.
              </p>
            </aside>
          </section>

          <section className='flex flex-col gap-3.5 rounded-3xl border-2 border-[#E5E7EB] bg-[#F9FAFB] px-6 py-[18px] shadow-lg'>
            <h3 className='text-text-primary leading-6 font-semibold tracking-tight'>
              분리수거 꿀팁 🍯
            </h3>

            {tips.map((tip, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div className='bg-brand-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs text-white'>
                  {index + 1}
                </div>
                <p className='text-text-primary text-sm leading-5'>{tip}</p>
              </div>
            ))}
          </section>

          <div
            role='button'
            onClick={handleGoToChat}
            className='bg-brand-primary flex h-[103px] items-center justify-between rounded-2xl pr-3.5 pl-[19px] shadow-xl'
          >
            <div className='flex flex-col justify-center text-left text-white'>
              <p className='mb-1 text-sm leading-5'>궁금한게 있나요?</p>
              <p className='text-[18px] leading-7 font-semibold'>
                이코에게 물어보세요!
              </p>
            </div>
            <img
              src={RecyclingCheer}
              className='aspect-square h-20 w-20'
              alt='eco-recycling-cheer'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Info;
