import {
   Button,
   HeaderContainer,
   Logo,
   AncorGroup,
   Ancor,
} from './Header.style';
import logo from '../../assets/images/logo.png';
import { CaretLeft } from 'phosphor-react';

export const Header = ({ page }) => {
   let showAncor;
   let showButton;
   let whichButtonToShow;

   switch (page) {
      case 'home':
         showAncor = false;
         showButton = true;
         whichButtonToShow = 'Pokédex';
         break;
      case 'pokedex':
         showAncor = true;
         showButton = false;
         whichButtonToShow = '';
         break;
      case 'details':
         showAncor = true;
         showButton = true;
         whichButtonToShow = 'Excluir da Pokédex';
         break;
      default:
         break;
   }

   return (
      <HeaderContainer>
         <AncorGroup ancorIsVisible={showAncor}>
            <CaretLeft size={20} color='black' />
            <Ancor href='#'>Todos Pokémons</Ancor>
         </AncorGroup>

         <Logo src={logo} alt='Pokemon Logo' />

         <Button buttonIsVisible={showButton} type={whichButtonToShow}>
            {whichButtonToShow}
         </Button>
      </HeaderContainer>
   );
};
