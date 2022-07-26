import { useNavigate } from "react-router-dom"
import { POKEMON_BADGES } from "../../assets/Pokebadges"
import { GoToDetailsPage, GoToPokedexPage } from "../../router/coordinator"
import {
  ActionContainer,
  CaptureButton,
  DeleteButton,
  DetailsButton,
  Image,
  ImageContainer,
  InfoContainer,
  PokecardContainer,
} from "./styles"

export const Pokecard = (props) => {
  const navigate = useNavigate()

  return (
    <PokecardContainer>
      <InfoContainer>
        <div>
          <p>#{props.id}</p>
          <h1>{props.name}</h1>
        </div>
        <div>
          {props.types.map((type, index) => (
            <img
              key={index}
              src={POKEMON_BADGES[type.type.name.toUpperCase()]}
            />
          ))}
        </div>
      </InfoContainer>
      <ImageContainer>
        <Image src={props.image} />
      </ImageContainer>
      <ActionContainer>
        <DetailsButton onClick={() => GoToDetailsPage(navigate, props.name)}>
          Detalhes
        </DetailsButton>

        {props.page === "home" ? (
          <CaptureButton onClick={() => GoToPokedexPage(navigate)}>
            Capturar!
          </CaptureButton>
        ) : (
          <DeleteButton onClick={() => {}}>Excluir!</DeleteButton>
        )}
      </ActionContainer>
    </PokecardContainer>
  )
}
