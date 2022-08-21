import { FC, useEffect, useState } from 'react';
import { PokemonSpecies } from '../../interfaces/Generation';
import PokemonsService from '../../services/PokemonsService';

const Home: FC = () => {
  const [pokemons, setPokemons] = useState<PokemonSpecies[]>([]);

  async function fetchGeneration() {
    const pokemonsResponse = await PokemonsService.getByGeneration(1).then(
      (data) => data.pokemon_species,
    );
    setPokemons(pokemonsResponse);
  }

  useEffect(() => {
    fetchGeneration();
  }, []);

  return <h1>Página Home</h1>;
};

export default Home;
