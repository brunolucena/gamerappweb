import React from 'react';

import './styles.scss';

interface Props {
  opened: boolean;
  toggleOpened: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
}

const Hamburguer: React.FC<Props> = props => {
  const { opened, toggleOpened } = props;

  return (
    <div
      className={`hamburguer-container ${opened ? 'opened' : ''}`}
      onClick={toggleOpened}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default Hamburguer;
