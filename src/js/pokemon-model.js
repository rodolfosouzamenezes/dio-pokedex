class Pokemon {
  constructor(pokeApiDetail, typeInfo= 'simplified') {
    this.name = pokeApiDetail.name;
    this.number = pokeApiDetail.id.toString().padStart(3, '0');
    this.image = pokeApiDetail.sprites.other.dream_world.front_default;

    const types = pokeApiDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;
    this.type = type;
    this.types = types;

    if (typeInfo === 'detailed') {
      this.weight = pokeApiDetail.weight;
      this.height = pokeApiDetail.height;

      const getWeaknesses = async () => {
        let weaknesses = await pokeAPI.getWeaknessToType(pokeApiDetail.types[0].type.url)

        return weaknesses;
      }

      this.weaknesses = getWeaknesses();

      this.stats = pokeApiDetail.stats.map(stat => {
        return {
          name: stat.stat.name,
          baseStat: stat.base_stat,
          effort: stat.effort 
        }
      })
    }
  }
}