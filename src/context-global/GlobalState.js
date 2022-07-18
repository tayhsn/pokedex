import axios from 'axios';
import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const GlobalState = (props) => {
   const [pokemons, setPokemons] = useState([]);
   const [pokemonDetails, setPokemonDetails] = useState([]);
   const [pokemonImages, setPokemonImages] = useState([])

   const getAllPokemons = () => {
      axios
         .get(URL)
         .then((response) => {
            setPokemons(response.data.results)

            let pokeArray = []
            response.data.results.map(async(poke) =>{
                const response = await axios.get(poke.url)
                pokeArray = [...pokeArray, { name: poke.name, image: response.data.sprites.front_default, types: response.data.types}]
                console.log(pokeArray)
            })
        })
         .catch((error) => error.message);
   };

   const getPokemonByName = (name) => {
      axios
         .get(`${URL}/${name}`)
         .then((response) => setPokemonDetails(response.data))
         .catch((error) => console.log(error.message));
   };

   const states = { pokemons, pokemonDetails, pokemonImages };
   const requests = { getAllPokemons, getPokemonByName };

   return (
      <GlobalStateContext.Provider value={{ states, requests }}>
         {props.children}
      </GlobalStateContext.Provider>
   );
};
