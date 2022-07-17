import { Header } from '../../components/header/Header';
import { PageTitle, HomeContainer } from './Home.style';
import { Pokecard } from '../../components/pokecard/Pokecard';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../context-global/GlobalStateContext';

export const Home = () => {

   const { states, requests } = useContext(GlobalStateContext)

   useEffect(() => {
      requests.getPokemons()
   }, [])

   return (
      <>
         <Header page='home' />
         <PageTitle>Todos pokémons</PageTitle>
         <HomeContainer>
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
            <Pokecard />
         </HomeContainer>
      </>
   );
};
