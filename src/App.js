import { GlobalState } from './context-global/GlobalState';
import { Router } from './router/routes';
import { GlobalStyle } from './styles/global';

export function App() {
   return (
      <GlobalState>
         <GlobalStyle />
         <Router />
      </ GlobalState>
   );
}
