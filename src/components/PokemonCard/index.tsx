import { FC, useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import capitalize from '../../utils/capitalize';
import getPokemonTypes from '../../utils/getPokemonTypes';
import defaultPokemonImg from '../../assets/images/default-pokemon.png';
import * as S from './style';
import { usePokemons } from '../../contexts/Pokemons';

interface IPokemonCard {
  name: string;
}

const PokemonCard: FC<IPokemonCard> = ({ name }) => {
  const [pokemonData, setPokemonData] = useState<any>();
  const { pokemonTypeFilter } = usePokemons();

  async function fetchPokemonData(pokemonName: string) {
    const pokemon = await PokemonsService.getByName(pokemonName).then(
      (data) => data,
    );
    setPokemonData(pokemon);
  }

  useEffect(() => {
    fetchPokemonData(name);
  }, [name]);

  if (pokemonTypeFilter !== 'all' && !getPokemonTypes(pokemonData?.types).includes(pokemonTypeFilter)) {
    return null;
  }

  return (
    <S.CardContainer type={getPokemonTypes(pokemonData?.types)}>
      <img
        src={pokemonData?.sprites?.front_default ?? defaultPokemonImg}
        alt={name}
      />
      <p>{`Nº ${pokemonData?.id}`}</p>
      <S.PokemonName>{capitalize(pokemonData?.name)}</S.PokemonName>
    </S.CardContainer>
  );
};

export default PokemonCard;
