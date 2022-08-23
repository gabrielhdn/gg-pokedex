import { FC, useContext } from 'react';
import PokemonCard from '../../components/PokemonCard';
import * as S from './style';
import Logo from '../../assets/images/pokedex-logo.svg';
import PokemonContext from '../../contexts/Pokemon/PokemonContext';

const Pokedex: FC = () => {
  const { pokemons } = useContext(PokemonContext);

  return (
    <S.PokedexContainer>
      <S.PokedexMenu>
        <img src={Logo} alt="Pokedex logo" />
      </S.PokedexMenu>
      <S.PokedexDisplay>
        {pokemons?.map(({ name }) => (
          <PokemonCard name={name} key={name} />
        ))}
      </S.PokedexDisplay>
    </S.PokedexContainer>
  );
};

export default Pokedex;
