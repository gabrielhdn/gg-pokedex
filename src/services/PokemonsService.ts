import axios from 'axios';
import { generations, IGenerations } from './utils/generations';

class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2';

  public async getByGeneration(generation: keyof IGenerations) {
    const { lastPokemonId, firstPokemonId } = generations[generation];
    return axios
      .get(`${this.baseUrl}/pokemon?limit=${lastPokemonId - firstPokemonId + 1}&offset=${firstPokemonId - 1}/`)
      .then(({ data }) => data);
  }

  public async getByName(name: string) {
    return axios
      .get(`${this.baseUrl}/pokemon/${name}`)
      .then(({ data }) => data);
  }

  public async getTypes() {
    return axios
      .get(`${this.baseUrl}/type`)
      .then(({ data }) => data.results);
  }
}

export default new PokemonService();
