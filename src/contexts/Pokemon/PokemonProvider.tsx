import {
  useState, useCallback, ReactNode, FC, useEffect, useMemo,
} from 'react';
import PokemonsService from '../../services/PokemonsService';
import { IGenerations } from '../../services/utils/generations';
import PokemonContext from './PokemonContext';

interface IProps {
  children?: ReactNode;
}

const PokemonProvider: FC<IProps> = ({ children }) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState<keyof IGenerations>('first');
  const [pokemonNameFilter, setPokemonNameFilter] = useState<string>('');

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
  }), [
    pokemons,
    selectedGeneration,
    handleGenerationSwitch,
    pokemonNameFilter,
    setPokemonNameFilter,
  ]);

  return (
    <PokemonContext.Provider value={providerValue}>
      { children }
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
