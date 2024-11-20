export class PokemonDTO {
  id: number;
  height: number;
  weight: number;
  name: string;

  constructor(id: number, height: number, weight: number, name: string) {
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.name = name;
  }
}
