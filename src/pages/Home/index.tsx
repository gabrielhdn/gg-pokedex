import { FC, useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import PokemonCard from '../../components/PokemonCard';

const Home: FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  async function fetchGeneration() {
    const pokemonsResponse = await PokemonsService.getByGeneration('first').then(
      (data) => data.results,
    );
    setPokemons(pokemonsResponse);
  }

  useEffect(() => {
    fetchGeneration();
  }, []);

  return (
    <>
      {pokemons.map(({ name }) => (
        <PokemonCard name={name} />
      ))}
    </>
  );
};

export default Home;
