import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        font-family: pretendard, sans-serif;
    }
    button, input, textarea {
        background: transparent;
    }
`;

export default GlobalStyle;
