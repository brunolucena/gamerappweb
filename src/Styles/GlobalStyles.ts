import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&family=PT+Serif:wght@700&display=swap');

*{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

html {
    background: var(--background);
}
    
:root {
    --primary: #0dac3d;
    --secondary: #1563ce;
    --text: #171717;
    --error: #ef0000;
    --success: #0dac3d;
    --warn: #ca2d51;
    --gray: #a0a0a0;
    --gray2: #8c8c8c;
    --background: #f0f0f0;
    --black: #000000;
  }

.input-text {
text-align: center;
}
`;
