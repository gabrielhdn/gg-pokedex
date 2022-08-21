import { FC } from 'react';

interface IPokemonCard {
  name: string;
}

const PokemonCard: FC<IPokemonCard> = ({ name }) => {
  console.log(name);
  return (
    <div>
      <img src="" alt={name} />
    </div>
  );
};
