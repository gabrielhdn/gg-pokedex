/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import nightBackground from '../../assets/images/background-dark.jpg';

export const HomeContainer = styled.main`
  background: url(${nightBackground});
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
