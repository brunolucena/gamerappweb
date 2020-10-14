import styled from "styled-components";

const handleColorType = (color:string) => {
    switch (color) {
      case "primary":
        return "var(--primary)";
      case "secondary":
        return "var(--secondary)";
      default:
      return "var(--primary)";   
    }
  };

export const Btn = styled.button<{type2:string}>`
    background: var(--primary);
    padding: 17px;
    border: none;
    border-radius: 5px;
    color: white;
    background: ${({ type2 }) => handleColorType(type2)};
`;
