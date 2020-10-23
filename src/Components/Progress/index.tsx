import React, { useEffect, useState } from 'react';
import { ProgressWrapper } from './styles';

interface Props {
  initialValue?: string;
  timeout?: number;
  value: string;
}

const Progress: React.FC<Props> = ({ initialValue, timeout, value }) => {
  const [progress, setProgress] = useState(timeout ? initialValue || '0' : value);

  useEffect(() => {
    setTimeout(() => {
      setProgress(value);
    }, timeout || 0);
  });

  return (
    <ProgressWrapper>
      <progress max='100' value={progress}></progress>
    </ProgressWrapper>
  );
};

export default Progress;
