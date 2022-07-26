import { useContext, useEffect } from "react"
import { Pokecard } from "../../components/Pokecard"
import { GlobalStateContext } from "../../context-global/GlobalStateContext"
import { HomeContainer } from "./styles"

export const Home = () => {
  const { states, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getAllPokemons()
  }, [])

  return (
    <>
      <h1>Todos pokémons</h1>
      <HomeContainer>
        {states.pokemon.map((poke, index) => (
          <Pokecard
            key={index}
            id={index + 1}
            name={poke.name}
            types={poke.types}
            image={poke.image}
            page='home'
          />
        ))}
      </HomeContainer>
    </>
  )
}
