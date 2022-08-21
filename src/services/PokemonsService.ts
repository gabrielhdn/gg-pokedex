import axios from 'axios';
import { IGeneration } from '../interfaces/Generation';

class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2';

  public async getByGeneration(generation: number) {
    return axios
      .get(`${this.baseUrl}/generation/${generation}/`)
      .then(({ data }) => data);
  }

  public async getByName(name: string) {
    return axios
      .get(`${this.baseUrl}/pokemon/${name}`)
      .then(({ data }) => data);
  }
}

export default new PokemonService();
