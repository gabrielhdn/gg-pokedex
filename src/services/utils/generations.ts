export interface GenerationRange {
  firstPokemonId: number;
  lastPokemonId: number;
}

export interface Generations {
  first: GenerationRange;
  second: GenerationRange;
  third: GenerationRange;
  fourth: GenerationRange;
  fifth: GenerationRange;
  sixth: GenerationRange;
  seventh: GenerationRange;
  eighth: GenerationRange;
}

export const generations: Generations = {
  first: {
    firstPokemonId: 1,
    lastPokemonId: 151,
  },
  second: {
    firstPokemonId: 152,
    lastPokemonId: 251,
  },
  third: {
    firstPokemonId: 252,
    lastPokemonId: 386,
  },
  fourth: {
    firstPokemonId: 387,
    lastPokemonId: 493,
  },
  fifth: {
    firstPokemonId: 494,
    lastPokemonId: 649,
  },
  sixth: {
    firstPokemonId: 650,
    lastPokemonId: 721,
  },
  seventh: {
    firstPokemonId: 722,
    lastPokemonId: 809,
  },
  eighth: {
    firstPokemonId: 810,
    lastPokemonId: 890,
  },
};
