import styled from 'styled-components';
import { ButtonType } from '.';

const handleColorType = (color?: ButtonType) => {
  switch (color) {
    case 'clear':
      return 'none';

    case 'primary':
      return 'var(--primary)';

    case 'secondary':
      return 'var(--secondary)';

    default:
      return 'var(--primary)';
  }
};

export const Btn = styled.button`
  border: none;
  cursor: pointer;
`;

export const BtnStyles = styled.div<{ type2?: ButtonType }>`
  padding: 12px 30px;
  border-radius: 8px;
  background: ${({ type2 }) => (type2 ? handleColorType(type2) : 'var(--primary)')};
  color: white;
  font-weight: bold;
  white-space: nowrap;
  min-width: 105px;
`;
