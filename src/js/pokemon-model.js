class Pokemon {
  constructor(pokeApiDetail) {
    this.name = pokeApiDetail.name.charAt(0).toUpperCase()
    + pokeApiDetail.name.slice(1);
    this.number = pokeApiDetail.order;
    this.image = pokeApiDetail.sprites.other.dream_world.front_default;

    const types = pokeApiDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;

    this.type = type;
    this.types = types;
  }
}