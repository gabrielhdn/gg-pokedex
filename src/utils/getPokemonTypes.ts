interface ITypes {
  slot: number
  type: {
    name: string
    url: string
  }
}

export default function getPokemonTypes(typesArray: ITypes[]) {
  return typesArray.map(({ type }) => type.name);
}
