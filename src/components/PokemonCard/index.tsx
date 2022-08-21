import { FC, useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';

interface IPokemonCard {
  name: string;
}

const PokemonCard: FC<IPokemonCard> = ({ name }) => {
  const [pokemonData, setPokemonData] = useState<any>();

  async function fetchPokemonData(pokemonName: string) {
    const pokemonData = await PokemonsService.getByName(pokemonName).then(
      (data) => data,
    );
    setPokemonData(pokemonData);
  }

  useEffect(() => {
    fetchPokemonData(name);
  }, [name]);

  return (
    <div>
      <img src={pokemonData?.sprites?.front_default} alt={name} />
    </div>
  );
};

export default PokemonCard;
