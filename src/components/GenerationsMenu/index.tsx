import { FC, useContext } from 'react';
import * as S from './style';
import PokemonContext from '../../contexts/Pokemon/PokemonContext';
import { menuOptions } from './options';

const GenerationsMenu: FC = () => {
  const { handleGenerationSwitch } = useContext(PokemonContext);

  return (
    <S.Container>
      {menuOptions.map((option) => (
        <S.MenuOptionButton
          onClick={() => handleGenerationSwitch(option.value)}
        >
          {`Generation ${option.title}`}
        </S.MenuOptionButton>
      ))}
    </S.Container>
  );
};

export default GenerationsMenu;
