import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Pokedex } from '../pages/pokedex/Pokedex';
import { Details } from '../pages/details/Details';

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<Pokedex />} exact path='/pokedex' />
            <Route element={<Details />} exact path='/details' />
         </Routes>
      </BrowserRouter>
   );
};
