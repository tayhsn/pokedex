import axios from "axios"
import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const URL = "https://pokeapi.co/api/v2/pokemon"

export const GlobalState = (props) => {
  const [page, setPage] = useState("")
  const [pokemon, setPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [pokedex, setPokedex] = useState([])

  const getAllPokemons = () => {
    axios
      .get(URL)
      .then((response) => {
        let pokeArray = []
        response.data.results.map(async (poke) => {
          const response = await axios.get(poke.url)
          pokeArray = [
            ...pokeArray,
            {
              name: poke.name,
              image: response.data.sprites.front_default,
              types: response.data.types,
            },
          ]
          setPokemon(pokeArray)
        })
      })
      .catch((error) => error.message)
  }

  const getPokemonByName = (name) => {
    axios
      .get(`${URL}/${name}`)
      .then((response) => setPokemonDetails(response.data))
      .catch((error) => console.log(error.message))
  }

  const states = { pokedex, pokemon, pokemonDetails, page }
  const requests = { getAllPokemons, getPokemonByName }
  const setters = { setPage, setPokedex }

  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
