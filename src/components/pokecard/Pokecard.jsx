import {
   ActionContainer,
   Ancor,
   Button,
   InfoContainer,
   ImageContainer,
   Image,
   PokecardContainer,
} from './Pokecard.style';
import { POKEMON_BADGES } from '../../assets/Pokebadges';
import bulbasaur from '../../assets/images/bulbasaur.png';

export const Pokecard = (props) => {
   return (
      <PokecardContainer>
         <InfoContainer>
            <div>
               <p>#01</p>
               <h1>Bulbasaur</h1>
            </div>
            <div>
               <img src={POKEMON_BADGES.POISON} />
               <img src={POKEMON_BADGES.GRASS} />
            </div>
         </InfoContainer>
         <ImageContainer>
            <Image src={bulbasaur} />
         </ImageContainer>
         <ActionContainer>
            <Ancor href=''>Detalhes</Ancor>
            <Button>Capturar!</Button>
         </ActionContainer>
      </PokecardContainer>
   );
};
