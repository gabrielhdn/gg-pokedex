import { FC, useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import PokemonCard from '../../components/PokemonCard';
import * as S from './style';

const Home: FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  async function fetchGeneration() {
    const pokemonsResponse = await PokemonsService.getByGeneration(
      'first',
    ).then((data) => data.results);
    setPokemons(pokemonsResponse);
  }

  useEffect(() => {
    fetchGeneration();
  }, []);

  return (
    <S.HomeContainer>
      {pokemons.map(({ name }) => (
        <PokemonCard name={name} />
      ))}
      <h1>AISHDIUASHDIUAHSDH</h1>
    </S.HomeContainer>
  );
};

export default Home;
