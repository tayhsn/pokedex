import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Pokedex } from '../pages/pokedex';
import { Details } from '../pages/details';

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<Pokedex />} exact path='/pokedex' />
            <Route element={<Details />} exact path='/details/:pokemon' />
         </Routes>
      </BrowserRouter>
   );
};
