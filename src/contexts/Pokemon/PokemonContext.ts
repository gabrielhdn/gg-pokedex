/* eslint-disable no-unused-vars */
import { createContext } from 'react';

interface IPokemonContext {
  pokemons: any[];
  selectedGeneration: string;
  handleGenerationSwitch: (generation: string) => void;
}

export default createContext<IPokemonContext>({} as IPokemonContext);
