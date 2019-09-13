var pokemonList = { 
    "index": 0,
    "pokemon": [ 
        { "id": 1,
            "name": "Bulbasaur",
            "type": "Grass",
            "height": "2'04",
            "weight": "15.2lbs" },
        { "id": 4,
            "name": "Charmander",
            "type": "Fire",
            "height": "2'0",
            "weight": "18.7lbs" },
        { "id": 7,
            "name": "Squirtle",
            "type": "Water",
            "height": "1'08",
            "weight": "19.8lbs" },
        { "id": 25,
            "name": "Pikachu",
            "type": "Electric",
            "height": "1'04",
            "weight": "13.2lbs" }
    ]
};

function displayPokemon() {
    document.getElementById("nameText").innerHTML = pokemonList.pokemon[pokemonList.index].name;
    document.getElementById("typeText").innerHTML = pokemonList.pokemon[pokemonList.index].type;
    document.getElementById("heightText").innerHTML = pokemonList.pokemon[pokemonList.index].height;
    document.getElementById("weightText").innerHTML = pokemonList.pokemon[pokemonList.index].weight;
    incrementIndex();
}

function setVisibility() {
    if (document.getElementById("nextPokemonButton").style.display == "none") {
        showRoster();
    } else {
        hideRoster();
    }
}

function showRoster() {
    document.getElementById("nameLabel").style.display = "inline";
    document.getElementById("nameText").style.display = "inline";
    document.getElementById("typeLabel").style.display = "inline";
    document.getElementById("typeText").style.display = "inline";
    document.getElementById("heightLabel").style.display = "inline";
    document.getElementById("heightText").style.display = "inline";
    document.getElementById("weightLabel").style.display = "inline";
    document.getElementById("weightText").style.display = "inline";
    document.getElementById("nextPokemonButton").style.display = "inline";

    document.getElementById("viewRosterButton").innerHTML = "Hide Roster";
}

function hideRoster() {
    document.getElementById("nameLabel").style.display = "none";
    document.getElementById("nameText").style.display = "none";
    document.getElementById("typeLabel").style.display = "none";
    document.getElementById("typeText").style.display = "none";
    document.getElementById("heightLabel").style.display = "none";
    document.getElementById("heightText").style.display = "none";
    document.getElementById("weightLabel").style.display = "none";
    document.getElementById("weightText").style.display = "none";
    document.getElementById("nextPokemonButton").style.display = "none";

    document.getElementById("viewRosterButton").innerHTML = "Show Roster";
}

function incrementIndex() {
    if (pokemonList.index < (pokemonList.pokemon.length - 1)){
        pokemonList.index++;
    } else {
        pokemonList.index = 0;
    }
}