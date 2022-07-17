import styled from 'styled-components';
import pokebola from '../../assets/images/pokebola.png';
import { theme } from '../../styles/theme';

export const PokecardContainer = styled.div`
   width: 440px;
   height: 210px;
   border-radius: 12px;

   background: ${theme['green-light']};

   display: grid;
   grid-template-columns: 1fr 210px;
   grid-template-rows: 1fr 50px;
   grid-template-areas:
      'info image'
      'action action';

   position: relative;
`;

export const InfoContainer = styled.div`
   width: 85%;
   margin: 0 auto;
   font-family: 'Inter';
   font-weight: 700;
   grid-area: info;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
`;

export const ImageContainer = styled.div`
   width: 210.73px;
   position: relative;
   background: url(${pokebola}) 100%;
   grid-area: image;
`;

export const Image = styled.img`
   width: 193px;
   margin: 0 auto;

   position: absolute;
   inset: -50px 0;
`;

export const ActionContainer = styled.div`
   width: 85%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   justify-self: center;
   grid-area: action;

   position: absolute;
   bottom: 20px;
`;

export const Ancor = styled.a`
   color: ${theme.white};
   text-decoration: underline;
`;

export const Button = styled.button`
   width: 146px;
   height: 38px;
   border: 0;
   border-radius: 8px;
   display: flex;
   justify-content: center;
   align-items: center;

   background: ${theme.white};
   color: ${theme['black-medium']};
   font-weight: 400;
`;
