const pokemonHTMLList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 12;
let offset = 0;

const loadPokemonItems = (offset, limit) => {
  const convertPokemonToHTMLList = (jsonPokemonList) => {
    const pokemonList = jsonPokemonList.map((pokemon) => (
      `
      <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      
      <span class="name">${pokemon.name}</span>
        <div class="details">
        <ol class="types">
        ${pokemon.types.map(type => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
        </ol>
        
        <img src="${pokemon.image}" alt="${pokemon.name}">
          </div>
      </li>
      `
    ))
  
    return pokemonList.join('')
  };

  pokeAPI.getPokemonList(offset, limit).then((responsePokemonList = []) => {
    pokemonHTMLList.innerHTML += convertPokemonToHTMLList(responsePokemonList);
  });
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  loadPokemonItems(offset, limit)
})