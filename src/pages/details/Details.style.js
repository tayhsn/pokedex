import styled from 'styled-components';
import { theme } from '../../styles/theme';

import pokebola from '../../assets/images/pokebola.png';

export const PageTitle = styled.div`
   width: 95%;
   margin: 40px auto;

   font-size: 48px;
`;

export const DetailsContainer = styled.div`
   width: 95%;
   height: 660px;
   margin: 10px auto;
   border-radius: 37px;
   padding: 25px;

   background: ${theme['green-light']} url(${pokebola}) no-repeat fixed right;
   background-size: 65%;

   display: grid;
   grid-template-columns: 25% 30% 20% 15%;
   gap: 24px;

   justify-content: space-around;
`;

export const ThumbnailContainer = styled.div`
   width: 100%;
   height: 100%;
   grid-column: 1;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const Thumbnail = styled.img`
   width: 100%;
   height: 47%;
   border-radius: 12px;

   background: ${theme.white};
`;

export const BaseStats = styled.div`
   width: 100%;
   height: 100%;
   grid-column: 2;
   border-radius: 12px;
   padding: 15px;

   background: ${theme.white};
   color: ${theme['black-dark']};
`;

export const Table = styled.table`
   width: 100%;

   color: ${theme['gray-dark']};
`;

export const TableRow = styled.table`
   width: 100%;
   margin: 10px 5px;
   display: flex;
   justify-content: space-between;
   border-top: 1px solid ${theme['gray-light']};

   color: ${(props) =>
      props.color === 'black' ? theme['black-dark'] : theme['gray-dark']};
`;

export const InfoContainer = styled.div`
   width: 100%;
   height: 100%;
   grid-column: 3;
   border-radius: 12px;
`;

export const Info = styled.div`
   width: 100%;
   height: 30%;

   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Moves = styled.div`
   width: 100%;
   height: 70%;
   border-radius: 12px;
   padding: 15px;
   background: ${theme.white};
   color: ${theme['black-dark']};

   display: flex;
   flex-direction: column;
`;

export const Power = styled.div`
   width: fit-content;
   font-weight: 400;
   padding: 10px;
   margin: 10px 0;
   background: ${theme['gray-light']};
   border: 1px dashed rgba(0, 0, 0, 0.14);
   border-radius: 12px;
`;

export const ImageContainer = styled.div`
   width: 100%;
   height: 100%;
   grid-column: 4;
   position: relative;
`;

export const Image = styled.img`
   min-width: 16rem;

   position: absolute;
   inset: -130px -50px;
`;
