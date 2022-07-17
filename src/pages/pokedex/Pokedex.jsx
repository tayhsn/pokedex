import { Header } from '../../components/header/Header';
import { PageTitle, PokedexContainer } from './Pokedex.style';
import { Pokecard } from '../../components/pokecard/Pokecard';

export const Pokedex = () => {
   return (
      <>
         <Header page='pokedex' />
         <PageTitle>Meus pokémons</PageTitle>
         <PokedexContainer>
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
         </PokedexContainer>
      </>
   );
};
