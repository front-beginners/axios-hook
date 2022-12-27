import axios from 'axios'

export const pokemonInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})
