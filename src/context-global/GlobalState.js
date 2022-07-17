import axios from "axios";
import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const URL = 'https://pokeapi.co/api/v2/pokemon'

export const GlobalState = (props) => {
    
    const [pokemons, setPokemons] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])

    const getAllPokemons = () => {
        axios.get(URL) 
        .then((response) => setPokemons(response.data.results))
        .catch((error) => error.message)
    }

    const getPokemonById= (id) => {
        axios.get(`${URL}/${id}`)
        .then((response) => setPokemonDetails(response.data))
        .catch((error) => console.log(error.message))
    }
    
    const states = { pokemons, pokemonDetails }
    const requests = { getAllPokemons, getPokemonById }

    return(
        <GlobalStateContext.Provider value={{ states, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}