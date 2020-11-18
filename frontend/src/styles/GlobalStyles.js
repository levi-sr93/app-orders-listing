import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;


    &:focus{
      outline: 0;
    }
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Verdana, Geneva, Tahoma, sans-serif;
    background: #eee;
    font-weight: 500;
    color: #0a100d;
  }
`;
