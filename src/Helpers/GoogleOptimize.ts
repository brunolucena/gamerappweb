import { useEffect, useState } from 'react';

interface Props {
  activationEvent: string;
  experimentId: string;
}

export const useGetExperimentVariant = ({ activationEvent, experimentId }: Props) => {
  const [variant, setVariant] = useState();

  useEffect(() => {
    const activateExperiment = async () => {
      if ((window as any).dataLayer) {
        await (window as any).dataLayer.push({ event: activationEvent });
      }
    };

    activateExperiment();

    const intervalId = setInterval(async () => {
      if ((window as any).google_optimize !== undefined) {
        const variant = await (window as any).google_optimize.get(experimentId);

        setVariant(variant);
        clearInterval(intervalId);
      }
    }, 100);
  });

  return { enabled: variant === '1', variant };
};
