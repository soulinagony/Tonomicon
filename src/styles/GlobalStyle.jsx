import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');

  /* Сброс стилей для всех элементов */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu Mono', monospace;
  }

  /* Основные стили для body */
  body {
    font-family: 'Arial', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }

  /* Стили для корневого элемента */
  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  /* Стили для заголовков */
  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 2.5rem;
    width: 100%;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  /* Стили для подзаголовков */
  h3 {
    margin: 1rem 0;
    text-align: center;
  }

  /* Стили для параграфов */
  p {
    line-height: 1.6;
    margin: 1rem 0;
    text-align: center;
  }
`;

export default GlobalStyles;