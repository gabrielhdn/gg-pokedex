import { FC, useEffect, useState } from 'react';
import { PokemonSpecies } from '../../interfaces/Generation';
import PokemonsService from '../../services/PokemonsService';
import PokemonCard from '../../components/PokemonCard';

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

  return (
    <>
      {pokemons.map(({ name }) => {
        return <PokemonCard name={name} />;
      })}
    </>
  );
};

export default Home;
