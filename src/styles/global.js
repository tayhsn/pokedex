import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: ${theme['gray-dark']};
      color: ${theme.white};
   }

   body, input, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
   }
`;
