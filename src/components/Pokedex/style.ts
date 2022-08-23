import styled from 'styled-components';

export const PokedexContainer = styled.section`
  background-color: #f6f5fc;
  width: 80%;
  height: 85%;
  display: flex;
  border: 1px solid black;
`;

export const PokedexMenu = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ff6961;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-right: 1px solid black;

  img {
    width: 13em;
    margin-top: 10px;
  }
`;

export const PokedexDisplay = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: scroll;
  gap: 2em;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    /* border-radius: 4px; */
    background-color: #ff6961;
  }
`;
