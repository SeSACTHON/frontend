import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AILoadingGif from '@/assets/images/mainCharacter/AI_Loading.gif';
import { LOADING_STEPS } from '@/constants/AnswerConfig';
import { useLoadingSteps } from '@/hooks/useLoadingSteps';
import { LoadingStep } from '@/components/camera/LoadingStep';

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = location.state;

  const [isApiComplete, setIsApiComplete] = useState(false);
  const { currentStep, minTimeElapsed } = useLoadingSteps();

  useEffect(() => {
    const callAPI = async () => {
      try {
        // TODO: 실제 API 호출
        console.log('📤 서버 전송 시작:', imageUrl);

        setIsApiComplete(true);
      } catch (error) {
        console.error('API 에러:', error);
        setIsApiComplete(true);
        // 에러 처리 - 에러가 발생해도 Answer 페이지로 이동
      }
    };

    if (imageUrl) {
      callAPI();
    }
  }, [imageUrl]);

  useEffect(() => {
    if (minTimeElapsed && isApiComplete) {
      navigate('/camera/answer', {
        state: { imageUrl },
      });
    }
  }, [minTimeElapsed, isApiComplete, navigate, imageUrl]);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <img
        src={AILoadingGif}
        alt='eco-character'
        className='h-[132px] w-[132px]'
      />

      <div className='mt-[52px] flex-col items-center text-center'>
        <p className='text-text-secondary mb-3 text-[15px] leading-5 tracking-[-0.15px]'>
          잠시만 기다려주세요...
        </p>
        <h1 className='text-text-primary text-[22px] leading-8 font-extrabold tracking-[0.07px]'>
          이코가 사진을 분석하고 있어요!
        </h1>

        <div className='mx-auto mt-14 flex w-fit flex-col items-start gap-5.5'>
          {LOADING_STEPS.map((text, index) => (
            <LoadingStep
              key={index}
              text={text}
              isComplete={currentStep > index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
