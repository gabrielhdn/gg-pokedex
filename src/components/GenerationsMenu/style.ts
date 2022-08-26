import styled, { css } from 'styled-components';

interface IMenuOption {
  isSelected: boolean
}

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1.5rem;
  justify-content: center;
`;

export const MenuOptionButton = styled.button<IMenuOption>`
  cursor: pointer;
  width: 9.7rem;
  height: 2.5rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  border-radius: 5px;
  border-style: none;
  background: #fff;
  color: #202124;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  ${({ isSelected }) => isSelected && css`
    background: #202124;
    color: #fff;
  `}

  &:hover {
    background: #202124;
    color: #fff;
  }
`;

export const TextInput = styled.input``;
