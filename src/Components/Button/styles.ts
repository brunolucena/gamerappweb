import styled from 'styled-components';

const handleColorType = (color: string) => {
  switch (color) {
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

export const BtnStyles = styled.div<{ type2?: string }>`
  padding: 17px;
  border-radius: 8px;
  background: ${({ type2 }) => (type2 ? handleColorType(type2) : 'var(--primary)')};
  color: white;
  font-weight: bold;
  white-space: nowrap;
  min-width: 105px;
`;
