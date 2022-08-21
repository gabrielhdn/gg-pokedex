import axios from 'axios';
import { IGeneration } from '../interfaces/Generation';

class PokemonService {
  public getByGeneration(generation: number) {
    return axios
      .get(`https://pokeapi.co/api/v2/generation/${generation}/`)
      .then(({ data }) => data);
  }
}

export default new PokemonService();
