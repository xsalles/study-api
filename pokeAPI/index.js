const prompt = require("prompt-sync")({ sigint: true });

async function getPokemon() {
  let pokemonSearched = prompt("Qual pokemon você deseja saber a habilidade?");
  pokemonSearched = pokemonSearched.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`;

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.abilities[0].ability.name);
      });
  } catch (error) {
    console.error(error);
  }
}

getPokemon();
