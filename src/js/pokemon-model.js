class Pokemon {
  constructor(pokeApiDetail) {
    this.name = pokeApiDetail.name;
    this.number = pokeApiDetail.id.toString().padStart(3, '0');
    this.image = pokeApiDetail.sprites.other.dream_world.front_default;

    const types = pokeApiDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;

    this.type = type;
    this.types = types;
  }
}