import { Header } from '../../components/header/Header';
import { PageTitle, HomeContainer } from './Home.style';
import { Pokecard } from '../../components/pokecard/Pokecard';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../context-global/GlobalStateContext';

export const Home = () => {
   const { states, requests } = useContext(GlobalStateContext);

   useEffect(() => {
      requests.getAllPokemons();
   }, []);

   return (
      <>
         <Header page='home' />
         <PageTitle>Todos pokémons</PageTitle>
         <HomeContainer>
            {states.pokemons.map((poke, index) => (
               <Pokecard
                  key={index}
                  id={index + 1}
                  name={poke.name}
                  url={poke.url}
                  action='Capturar'
               />
            ))}
         </HomeContainer>
      </>
   );
};
