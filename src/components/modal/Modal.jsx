import { ModalContainer } from './Modal.style';

export const Modal = (props) => {
   let title;
   let subtitle;

   if (props.addPoke) {
      title = 'Gotcha!';
      subtitle = 'O Pokémon foi adicionado a sua Pokédex';
   } else if (props.removePoke) {
      title = 'Oh, no!';
      subtitle = 'O Pokémon foi removido da sua Pokédex';
   }

   return (
      <ModalContainer>
         <h1>{title}</h1>
         <p>{subtitle}</p>
      </ModalContainer>
   );
};
