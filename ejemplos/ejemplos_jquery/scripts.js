// Creamos un nuevo XMLHttpRequest
let xhttp = new XMLHttpRequest();

// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta viene en formato texto, por lo que tendremos que interpretarlo
    let pokemon = JSON.parse(this.responseText);
    let results = document.getElementById('results');
    let pokemones = '';
    pokemones += '<p>' + pokemon.count + ' pokemones cargados...</p>';
    pokemones += '<ol>';
    for(let p of pokemon.results) {
      pokemones += '<li>' + p.name + '</li>';
    };
    pokemones += '</ol>';
    results.innerHTML = pokemones;
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhttp.setRequestHeader("Content-type", "application/json");
// Para enviar parámetros, se usa el método send
xhttp.send(null);
