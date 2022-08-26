import { FC, useContext, useMemo } from 'react';
import PokemonCard from '../../components/PokemonCard';
import * as S from './style';
import Logo from '../../assets/images/pokedex-logo.svg';
import PokemonContext from '../../contexts/Pokemon/PokemonContext';
import GenerationsMenu from '../GenerationsMenu';

const Pokedex: FC = () => {
  const { pokemons, pokemonNameFilter } = useContext(PokemonContext);

  const filteredPokemons = useMemo(() => (
    pokemons.filter((pokemon) => pokemon.name.includes(pokemonNameFilter.toLowerCase()))
  ), [pokemonNameFilter]);

  return (
    <S.PokedexContainer>
      <S.PokedexMenu>
        <img src={Logo} alt="Pokedex logo" />
        <GenerationsMenu />
      </S.PokedexMenu>
      <S.PokedexDisplay>
        {pokemonNameFilter
          ? filteredPokemons?.map(({ name }) => (
            <PokemonCard name={name} key={name} />
          ))
          : pokemons?.map(({ name }) => (
            <PokemonCard name={name} key={name} />
          )) }
      </S.PokedexDisplay>
    </S.PokedexContainer>
  );
};

export default Pokedex;
