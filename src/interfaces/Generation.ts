export interface MainRegion {
  name: string;
  url: string;
}

export interface Moves {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonTypes {
  name: string;
  url: string;
}

export interface Names {
  name: string;
  language: {
    name: string;
    url: string;
  };
}

export interface VersionGroups {
  name: string;
  url: string;
}

export interface IGeneration<T> {
  abilities: T[];
  id: number;
  main_region: MainRegion;
  moves: Moves[];
  name: string;
  names: Names[];
  pokemon_species: PokemonSpecies[];
  types: PokemonTypes[];
  version_groups: VersionGroups[];
}
