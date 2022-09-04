import {
  FC, useMemo, ChangeEvent, useState, useEffect,
} from 'react';
import PokemonCard from '../../components/PokemonCard';
import * as S from './style';
import Logo from '../../assets/images/pokedex-logo.svg';
import GenerationsMenu from '../GenerationsMenu';
import PokemonsService from '../../services/PokemonsService';
import { usePokemons } from '../../contexts/Pokemons';

interface IPokemonTypes {
  name: string;
  url: string;
}

const Pokedex: FC = () => {
  const {
    pokemons,
    pokemonNameFilter,
    setPokemonNameFilter,
    pokemonTypeFilter,
    setPokemonTypeFilter,
  } = usePokemons();

  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);

  const fetchTypes = async () => {
    const types = await PokemonsService.getTypes();
    setPokemonTypes(types.map((type: IPokemonTypes) => type.name));
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  const filteredPokemons = useMemo(
    () => pokemons.filter((pokemon) => pokemon.name.includes(pokemonNameFilter.toLowerCase())),
    [pokemonNameFilter],
  );

  return (
    <S.PokedexContainer>
      <S.PokedexMenu>
        <img src={Logo} alt="Pokedex logo" />
        <GenerationsMenu />
        <S.TextInput
          type="text"
          value={pokemonNameFilter}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPokemonNameFilter(e.target.value)}
        />
        <S.SelectInput
          value={pokemonTypeFilter}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setPokemonTypeFilter(e.target.value)}
        >
          {['all', ...pokemonTypes].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.SelectInput>
      </S.PokedexMenu>
      <S.PokedexDisplay>
        {pokemonNameFilter
          ? filteredPokemons?.map(({ name }) => (
            <PokemonCard name={name} key={name} />
          ))
          : pokemons?.map(({ name }) => <PokemonCard name={name} key={name} />)}
      </S.PokedexDisplay>
    </S.PokedexContainer>
  );
};

export default Pokedex;
