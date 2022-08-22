import { FC } from 'react';
import * as S from './style';
import Pokedex from '../../components/Pokedex';

const Home: FC = () => (
  <S.HomeContainer>
    <Pokedex />
  </S.HomeContainer>
);

export default Home;
