import { useContext } from "react"
import { GlobalStateContext } from "../../context-global/GlobalStateContext"

import { useNavigate } from "react-router-dom"
import { POKEMON_BADGES } from "../../assets/Pokebadges"
import { GoToDetailsPage } from "../../router/coordinator"
import {
  ActionContainer,
  BadgeContainer,
  CaptureButton,
  DeleteButton,
  DetailsButton,
  Image,
  ImageContainer,
  InfoContainer,
  PokecardContainer,
} from "./styles"

export const Pokecard = (props) => {
  const { states, setters } = useContext(GlobalStateContext)
  const navigate = useNavigate()

  const handleCapturePokemon = () => {
    setters.setPokedex([...states.pokedex])
  }

  const handlePokemonDetails = () => {
    GoToDetailsPage(navigate, props.name)
  }

  const handleDeletePokemon = () => {}

  return (
    <PokecardContainer>
      <InfoContainer>
        <div>
          <p>#{props.id}</p>
          <h1>{props.name}</h1>
        </div>
        <BadgeContainer>
          {props.types.map((type, index) => (
            <img
              key={index}
              src={POKEMON_BADGES[type.type.name.toUpperCase()]}
            />
          ))}
        </BadgeContainer>
      </InfoContainer>
      <ImageContainer>
        <Image src={props.image} />
      </ImageContainer>
      <ActionContainer>
        <DetailsButton
          onClick={() => handlePokemonDetails(navigate, props.name)}
        >
          Detalhes
        </DetailsButton>

        {props.page === "home" ? (
          <CaptureButton onClick={() => handleCapturePokemon(navigate)}>
            Capturar!
          </CaptureButton>
        ) : (
          <DeleteButton onClick={() => handleDeletePokemon(props.id)}>
            Excluir!
          </DeleteButton>
        )}
      </ActionContainer>
    </PokecardContainer>
  )
}
