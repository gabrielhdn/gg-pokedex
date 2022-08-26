import {
  ChangeEvent, FC, useContext,
} from 'react';
import * as S from './style';
import PokemonContext from '../../contexts/Pokemon/PokemonContext';
import { menuOptions } from './options';

const GenerationsMenu: FC = () => {
  const {
    handleGenerationSwitch,
    selectedGeneration,
    pokemonNameFilter,
    setPokemonNameFilter,
  } = useContext(PokemonContext);

  return (
    <S.Container>
      {menuOptions.map((option) => (
        <S.MenuOptionButton
          onClick={() => handleGenerationSwitch(option.value)}
          isSelected={selectedGeneration === option.value}
          key={option.value}
        >
          {`Generation ${option.title}`}
        </S.MenuOptionButton>
      ))}
      <S.TextInput
        type="text"
        value={pokemonNameFilter}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPokemonNameFilter(e.target.value)}
      />
    </S.Container>
  );
};

export default GenerationsMenu;
