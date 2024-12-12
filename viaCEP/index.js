const prompt = require("prompt-sync")({ sigint: true });

async function getAddress() {
  const cep = prompt("Digite o seu CEP");

  const url = `https://viacep.com.br/ws/${cep}/json`;

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error(error);
  }
}

getAddress();
