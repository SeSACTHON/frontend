import SpinnerIng from '@/assets/icons/spinner_ing.svg';
import SpinnerFinish from '@/assets/icons/spinner_fin.svg';

interface LoadingStepProps {
  text: string;
  isComplete: boolean;
}

export const LoadingStep = ({ text, isComplete }: LoadingStepProps) => (
  <div className='flex items-center gap-3'>
    <img
      src={isComplete ? SpinnerFinish : SpinnerIng}
      alt={isComplete ? 'complete' : 'loading'}
      className={`aspect-square h-6 w-6 ${!isComplete ? 'animate-spin' : ''}`}
    />
    <p className='text-[13px] leading-5 tracking-[-0.15px]'>{text}</p>
  </div>
);
