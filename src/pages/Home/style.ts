/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import dayBackground from '../../assets/images/b.png';

export const HomeContainer = styled.main`
  background: url(${dayBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
