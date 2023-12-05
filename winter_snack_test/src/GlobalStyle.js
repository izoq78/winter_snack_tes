import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Dongle-Regular';
      src: url('./assets/font/Dongle/Dongle-Regular.ttf') format('Truetype');
  }
  body{
    font-family: 'Dongle';
  }
`;


export default GlobalStyle;