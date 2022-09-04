/* eslint-disable no-unused-vars */
import {
  useState, useCallback, ReactNode, FC, useEffect, useMemo, useContext, createContext,
} from 'react';
import PokemonsService from '../services/PokemonsService';
import { IGenerations } from '../services/utils/generations';

interface IPokemonContext {
  pokemons: any[];
  selectedGeneration: string;
  handleGenerationSwitch: (generation: string) => void;
  pokemonNameFilter: string;
  setPokemonNameFilter: (pokemonName: string) => void;
  pokemonTypeFilter: string;
  setPokemonTypeFilter: (pokemonType: string) => void;
}

interface IPokemonProvider {
  children?: ReactNode;
}

const PokemonContext = createContext({} as IPokemonContext);

const PokemonProvider: FC<IPokemonProvider> = ({ children }) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState<keyof IGenerations>('first');
  const [pokemonNameFilter, setPokemonNameFilter] = useState<string>('');
  const [pokemonTypeFilter, setPokemonTypeFilter] = useState<string>('all');

  async function fetchGeneration() {
    const pokemonsResponse = await PokemonsService.getByGeneration(selectedGeneration)
      .then((data) => data.results);
    setPokemons(pokemonsResponse);
  }

  const handleGenerationSwitch = useCallback((generation: string) => {
    setSelectedGeneration(generation as keyof IGenerations);
  }, []);

  useEffect(() => {
    fetchGeneration();
  }, [selectedGeneration]);

  const providerValue = useMemo(() => ({
    pokemons,
    selectedGeneration,
    handleGenerationSwitch,
    pokemonNameFilter,
    setPokemonNameFilter,
    pokemonTypeFilter,
    setPokemonTypeFilter,
  }), [
    pokemons,
    selectedGeneration,
    handleGenerationSwitch,
    pokemonNameFilter,
    setPokemonNameFilter,
    pokemonTypeFilter,
    setPokemonTypeFilter,
  ]);

  return (
    <PokemonContext.Provider value={providerValue}>
      { children }
    </PokemonContext.Provider>
  );
};

const usePokemons = () => useContext(PokemonContext);

export {
  usePokemons,
  PokemonProvider,
};
