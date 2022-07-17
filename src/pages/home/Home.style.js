import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PageTitle = styled.div`
   width: 95%;
   margin: 40px auto;

   font-size: 48px;
`;

export const HomeContainer = styled.div`
   width: 95%;
   margin: 0 auto;

   display: grid;
   grid-template-columns: repeat(3, 1fr);
   column-gap: 20px;
   row-gap: 40px;
`;
