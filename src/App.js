import { Router } from './router/routes';
import { GlobalStyle } from './styles/global';

export function App() {
   return (
      <>
         <GlobalStyle />
         <Router />
      </>
   );
}
