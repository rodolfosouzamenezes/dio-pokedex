const pokemonHTMLList = document.getElementById('pokemonList');

const convertPokemonTypesToHTMLList = (pokemonTypes) => {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`).join('')
}

const convertPokemonToHTMLList = (jsonPokemonList) => {
  const pokemonList = jsonPokemonList.map((pokemon) => (
    `
    <li class="pokemon">
      <span class="number">#001</span>
      
      <span class="name">${pokemon.name.charAt(0).toUpperCase()
    + pokemon.name.slice(1)}</span>
      <div class="details">
        <ol class="types">
          ${convertPokemonTypesToHTMLList(pokemon.types)}
        </ol>
        
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name.charAt(0).toUpperCase()
    + pokemon.name.slice(1)}">
      </div>
    </li>
  `
  ))

  return pokemonList.join('')
};

pokeAPI.getPokemonList().then((responsePokemonList = []) => {
  pokemonHTMLList.innerHTML = convertPokemonToHTMLList(responsePokemonList);
});
