import { FC, useContext } from 'react';
import * as S from './style';
import PokemonContext from '../../contexts/Pokemon/PokemonContext';
import { IGenerations } from '../../services/utils/generations';

interface IMenuOptions {
  title: string;
  value: keyof IGenerations;
}

const menuOptions: IMenuOptions[] = [
  { title: 'I', value: 'first' },
  { title: 'II', value: 'second' },
  { title: 'III', value: 'third' },
  { title: 'IV', value: 'fourth' },
  { title: 'V', value: 'fifth' },
  { title: 'VI', value: 'sixth' },
  { title: 'VII', value: 'seventh' },
  { title: 'VIII', value: 'eighth' },
];

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
