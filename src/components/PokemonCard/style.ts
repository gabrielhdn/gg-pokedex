import styled from 'styled-components';
import { PokemonTypeColors, IPokemonTypeColors } from '../../styles/pokemonTypeColors';

interface ICardContainer {
  type: string
}

export const CardContainer = styled.div<ICardContainer>`
  margin: 10px;
  padding-bottom: 6px;
  height: 12em;
  width: 10em;
  background-color: ${({ type }) => PokemonTypeColors[type as keyof IPokemonTypeColors]};
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  p {
    color: #fff;
  }
`;

export const PokemonName = styled.p`
  color: #fff;
  font-weight: 600;
`;
