import { IGenerations } from '../../services/utils/generations';

export interface IMenuOptions {
  title: string;
  value: keyof IGenerations;
}

export const menuOptions: IMenuOptions[] = [
  { title: 'I', value: 'first' },
  { title: 'II', value: 'second' },
  { title: 'III', value: 'third' },
  { title: 'IV', value: 'fourth' },
  { title: 'V', value: 'fifth' },
  { title: 'VI', value: 'sixth' },
  { title: 'VII', value: 'seventh' },
  { title: 'VIII', value: 'eighth' },
];
