import axios from 'axios';
import { generations, IGenerations } from './utils/generations';

class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2';

  public async getByGeneration(generation: keyof IGenerations) {
    const { lastPokemonId, firstPokemonId } = generations[generation];
    return axios
      .get(`${this.baseUrl}/pokemon?limit=${lastPokemonId}&offset=${firstPokemonId - 1}/`)
      .then(({ data }) => data);
  }

  public async getByName(name: string) {
    return axios
      .get(`${this.baseUrl}/pokemon/${name}`)
      .then(({ data }) => data);
  }
}

export default new PokemonService();
