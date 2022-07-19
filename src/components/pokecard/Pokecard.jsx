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
import { goToDetailsPage } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';

export const Pokecard = (props) => {
   const navigate = useNavigate();

   const badges = props.types.map((type) => console.log(type.type.name));

   return (
      <PokecardContainer>
         <InfoContainer>
            <div>
               <p>#{props.id}</p>
               <h1>{props.name}</h1>
            </div>
            <div></div>
         </InfoContainer>
         <ImageContainer>
            <Image src={props.image} />
         </ImageContainer>
         <ActionContainer>
            <Ancor href={() => goToDetailsPage(navigate, props.name)}>
               Detalhes
            </Ancor>
            <Button action={props.action}>{props.action}!</Button>
         </ActionContainer>
      </PokecardContainer>
   );
};
