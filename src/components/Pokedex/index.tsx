import { FC, useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import PokemonCard from '../../components/PokemonCard';
import * as S from './style';
import Logo from '../../assets/images/Logo.svg';

const Pokedex: FC = () => {
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
    <S.PokedexContainer>
      <S.PokedexMenu>
        <img src={Logo} alt="Pokedex logo" />
      </S.PokedexMenu>
      <S.PokedexDisplay>
        {pokemons.map(({ name }) => (
          <PokemonCard name={name} key={name} />
        ))}
      </S.PokedexDisplay>
    </S.PokedexContainer>
  );
};

export default Pokedex;
