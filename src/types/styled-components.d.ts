import { ITheme } from '../styles/default';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
