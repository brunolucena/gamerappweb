import styled from 'styled-components';

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 13px;
  width: 100px;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  &:after {
    content: '';
    position: absolute;
    left: -3px;
    top: 0;
    width: 100px;
    height: 13px;
    border-right: 3px solid #000;
    border-left: 3px solid #000;
  }

  > progress {
    -webkit-appearance: none;
    width: 100px;
    height: 13px;

    ::-webkit-progress-bar {
      background: none;
    }

    ::-webkit-progress-value {
      background: var(--primary);
      transition: width 0.8s ease-out;
    }
  }
`;
