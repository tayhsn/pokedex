import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../router/coordinator"
import {
  ActionContainer,
  Ancor,
  Button,
  Image,
  ImageContainer,
  InfoContainer,
  PokecardContainer,
} from "./Pokecard.style"

export const Pokecard = (props) => {
  const navigate = useNavigate()

  const badges = props.types.map((type) => console.log(type.type.name))

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
  )
}
