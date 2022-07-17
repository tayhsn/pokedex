import { Header } from '../../components/header/Header';
import { PageTitle, HomeContainer } from './Home.style';
import { Pokecard } from '../../components/pokecard/Pokecard';

export const Home = () => {
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
