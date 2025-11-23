import PetIcon from '@/assets/icons/icon_pet.svg';
import { RecycleInfoCard } from '@/components/camera/RecycleInfoCard';
import { RecyclingGuideCard } from '@/components/camera/RecyclingGuideCard';
import { ResultNavigationBtn } from '@/components/camera/ResultNavigationBtn';
import { useLocation } from 'react-router-dom';

// 임시 데이터
const recycleGuideTempData = [
  '라벨과 뚜껑을 완전히 분리해주세요',
  '내용물을 모두 비우고 물로 헹궈주세요',
  '물기를 털어내고 말려주세요',
  '플라스틱 전용 수거함에 배출해주세요',
];

const Answer = () => {
  const location = useLocation();
  const { imageUrl } = location.state;

  return (
    <div className='no-scrollbar max-w-app relative h-full overflow-y-auto'>
      <div
        id='container'
        className='mx-auto mb-5 flex w-full flex-col items-center gap-5 px-6.5 pt-3.5 pb-6'
      >
        <img
          src={imageUrl}
          alt='image'
          className='mb-1.5 h-[243px] w-[243px] rounded-[5px] border-2 border-[#E5E7EB] object-cover'
        />

        <RecycleInfoCard
          isRecyclable={true}
          resultStatus='bad'
          wasteType='무색페트병'
          itemType='페트병'
          icon={PetIcon}
          feedbackMessage='라벨이 붙어있고 내용물이 남아있어요. 이대로 배출하면 재활용이 어려워요.'
        />

        <RecycleInfoCard
          isRecyclable={true}
          resultStatus='good'
          wasteType='무색페트병'
          icon={PetIcon}
          itemType='페트병'
          feedbackMessage='라벨과 뚜껑을 깔끔하게 제거하고, 내용물을 비워 깨끗하게 세척하셨네요. 덕분에 환경이 더 깨끗해져요!'
        />

        <RecycleInfoCard
          isRecyclable={false}
          wasteType='일반폐기물'
          itemType='닭 뼈'
        />

        <RecyclingGuideCard data={recycleGuideTempData} />

        <ResultNavigationBtn type='camera' />
        <ResultNavigationBtn type='reward' />
      </div>
    </div>
  );
};

export default Answer;
