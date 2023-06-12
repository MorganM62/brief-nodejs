async function afficherPokemon(type) {
    const body = document.querySelector('body');
    const nameElement = document.querySelector('.name');
    const mediaElement = document.querySelector('.media');
  
    // Retirer la classe .reveal du body
    body.classList.remove('reveal');
  
    // Effacer le texte à l'intérieur de la balise .name
    nameElement.textContent = '';
  
    // Appeler PokéAPI pour obtenir la liste des Pokémons correspondant au type
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
  
    // Faire un console log du résultat
    console.log(data);
  
    // Déterminer le nombre de Pokémons reçus
    const pokemonCount = data.pokemon.length;
  
    // Choisir un Pokémon aléatoire
    const randomIndex = Math.floor(Math.random() * pokemonCount);
    const randomPokemon = data.pokemon[randomIndex];
  
    // Faire un console log du Pokémon choisi
    console.log(randomPokemon);
  
    // Appeler PokéAPI pour obtenir les détails du Pokémon choisi
    const pokemonResponse = await fetch(randomPokemon.pokemon.url);
    const pokemonData = await pokemonResponse.json();
  
    // Faire un console log du résultat
    console.log(pokemonData);
  
    // Ajouter la classe .reveal au body
    body.classList.add('reveal');
  
    // Insérer le nom du Pokémon dans la balise .name
    nameElement.textContent = pokemonData.name;
  
    // Insérer l'image du sprite par défaut dans l'élément .media
    mediaElement.innerHTML = `<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">`;
  }
  
  // Écouter les changements de valeur du menu déroulant
  const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', function() {
    const selectedType = this.value;
    afficherPokemon(selectedType);
  });