import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
   width: 100%;
   height: 160px;
   padding: 0 50px;

   background: ${theme.white};

   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const AncorGroup = styled.div`
   display: flex;
   align-items: center;

   visibility: ${(props) => (props.ancorIsVisible ? 'visible' : 'hidden')};
`;

export const Ancor = styled.a`
   color: ${theme['black-dark']};
`;

export const Logo = styled.img`
   width: 307px;
   height: 113px;
`;

export const Button = styled.button`
   width: 200px;
   height: 74px;
   border-radius: 8px;
   border: 0;
   color: ${theme.white};

   font-size: ${(props) => (props.type === 'Pokédex' ? '24px' : '16px')};
   font-weight: ${(props) => (props.type === 'Pokédex' ? '700' : '400')};

   background: ${(props) =>
      props.type === 'Pokédex' ? theme['blue-medium'] : theme.red};

   visibility: ${(props) => (props.buttonIsVisible ? 'visible' : 'hidden')};
`;
