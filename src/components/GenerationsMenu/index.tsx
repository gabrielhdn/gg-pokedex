import { FC } from 'react';
import * as S from './style';
import { menuOptions } from './options';
import { usePokemons } from '../../contexts/Pokemons';

const GenerationsMenu: FC = () => {
  const { handleGenerationSwitch, selectedGeneration } = usePokemons();

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
    </S.Container>
  );
};

export default GenerationsMenu;
