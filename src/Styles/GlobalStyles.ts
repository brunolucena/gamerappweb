import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400');

*{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    --gray2: #8c8c8c;
    --background: #f0f0f0;
    --black: #000000;
    --white: #ffffff
  }

a {
  text-decoration: none;
}

.input-text {
    input {
        text-align: center;
    }
}

.switch-wrapper {
    position: relative;
  }
  
  .switch-wrapper > div {
    position: absolute;
    width: 100%;
  }
`;
