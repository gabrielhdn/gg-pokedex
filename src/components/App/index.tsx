import { useEffect, useState } from 'react';
import Home from '../../pages/Home';
import { PokemonSpecies } from '../../interfaces/Generation';
import PokemonsService from '../../services/PokemonsService';

function App() {
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

  return <Home />;
}

export default App;
