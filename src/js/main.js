const convertPokemonToHTMLList = (jsonPokemonList) => {
  const pokemonList = jsonPokemonList.map((pokemon) => (
    `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    
    <span class="name">${pokemon.name}</span>
      <div class="details">
      <ol class="types">
      ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
      </ol>
      
      <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    </li>
    `
  ))

  return pokemonList.join('')
};

const pokemonHTMLList = document.getElementById('pokemonList');

pokeAPI.getPokemonList().then((responsePokemonList = []) => {
  pokemonHTMLList.innerHTML = convertPokemonToHTMLList(responsePokemonList);
});
