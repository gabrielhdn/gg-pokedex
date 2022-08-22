import styled, { css } from 'styled-components';
import {
  PokemonTypeColors,
  IPokemonTypeColors,
} from '../../styles/pokemonTypeColors';

interface ICardContainer {
  type: string[];
}

export const CardContainer = styled.div<ICardContainer>`
  margin: 10px;
  padding: 0 4px 6px 4px;
  height: 14em;
  width: 12em;
  ${({ type }) => type?.length === 1 && css`
      background-color: ${PokemonTypeColors[type[0] as keyof IPokemonTypeColors]};
    `};
  ${({ type }) => type?.length > 1 && css`
      background: linear-gradient(
        45deg,
        ${PokemonTypeColors[type[0] as keyof IPokemonTypeColors]} 30%,
        ${PokemonTypeColors[type[1] as keyof IPokemonTypeColors]} 70%
      );
    `};
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    box-shadow: 5px 5px 8px #b4aeb9;
    transform: translateY(-4px);
  }

  p {
    color: #fff;
    font-family: ${({ theme }) => theme.fontFamilies.mono} !important;
  }
`;

export const PokemonName = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono} !important;
  text-align: center;
  margin-top: 5px;
`;
