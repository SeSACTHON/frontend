import { LOADING_STEPS } from '@/constants/AnswerConfig';
import { useEffect, useState } from 'react';

const STEP_DURATION = 3000;
const MIN_LOADING_TIME = STEP_DURATION * LOADING_STEPS.length;

export const useLoadingSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timers = LOADING_STEPS.map((_, index) =>
      setTimeout(
        () => {
          setCurrentStep(index + 2);
        },
        STEP_DURATION * (index + 1),
      ),
    );

    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_LOADING_TIME);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(minTimeTimer);
    };
  }, []);

  return { currentStep, minTimeElapsed };
};
