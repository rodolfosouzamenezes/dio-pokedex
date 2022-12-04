const pokeAPI = {}

pokeAPI.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

pokeAPI.getPokemonList = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  return fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => pokemonList.map((pokeAPI.getPokemonDetail)))
  .then((detailRequest) => Promise.all(detailRequest))
  .then((pokemonList) => pokemonList)
  .catch((error) => console.log(error))
}