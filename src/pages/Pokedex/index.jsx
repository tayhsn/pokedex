import { useContext, useEffect } from "react"
import { Pokecard } from "../../components/Pokecard"
import { GlobalStateContext } from "../../context-global/GlobalStateContext"
import { PokedexContainer } from "./styles"

export const Pokedex = () => {
  const { states, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getAllPokemons()
  }, [])

  return (
    <>
      <h1>Meus pokémons</h1>
      <PokedexContainer>
        {states.pokemon.map((poke, index) => (
          <Pokecard
            key={index}
            id={index + 1}
            name={poke.name}
            types={poke.types}
            image={poke.image}
            page='pokedex'
          />
        ))}
      </PokedexContainer>
    </>
  )
}
