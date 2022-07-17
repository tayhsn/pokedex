import { Header } from '../../components/header/Header';
import {
   BaseStats,
   DetailsContainer,
   PageTitle,
   ThumbnailContainer,
   Thumbnail,
   InfoContainer,
   ImageContainer,
   Image,
   Info,
   Moves,
   Power,
   Table,
   TableRow,
} from './Details.style';
import { POKEMON_BADGES } from '../../assets/Pokebadges';
import bulbasaur from '../../assets/images/bulbasaur.png';

export const Details = () => {
   return (
      <>
         <Header page='details' />
         <PageTitle>Detalhes</PageTitle>
         <DetailsContainer>
            <ThumbnailContainer>
               <Thumbnail />
               <Thumbnail />
            </ThumbnailContainer>

            <BaseStats>
               <h2>Base stats</h2>
               <Table>
                  <TableRow>
                     <td>HP</td>
                     <td>45</td>
                  </TableRow>
                  <TableRow>
                     <td>Attack</td>
                     <td>49</td>
                  </TableRow>
                  <TableRow>
                     <td>Defense</td>
                     <td>49</td>
                  </TableRow>
                  <TableRow>
                     <td>Sp.Atk</td>
                     <td>49</td>
                  </TableRow>
                  <TableRow>
                     <td>Sp. Def</td>
                     <td>49</td>
                  </TableRow>
                  <TableRow>
                     <td>Speed</td>
                     <td>49</td>
                  </TableRow>
                  <TableRow color='black'>
                     <td>Total</td>
                     <td>318</td>
                  </TableRow>
               </Table>
            </BaseStats>
            <InfoContainer>
               <Info>
                  <div>
                     <p>#01</p>
                     <h1>Bulbasaur</h1>
                  </div>
                  <div>
                     <img src={POKEMON_BADGES.POISON} />
                     <img src={POKEMON_BADGES.GRASS} />
                  </div>
               </Info>
               <Moves>
                  <h2>Moves:</h2>
                  <Power>Razor Wind</Power>
                  <Power>Razor Wind</Power>
                  <Power>Razor Wind</Power>
               </Moves>
            </InfoContainer>

            <ImageContainer>
               <Image src={bulbasaur} />
            </ImageContainer>
         </DetailsContainer>
      </>
   );
};
