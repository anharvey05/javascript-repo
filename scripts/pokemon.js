var pokemonList = { 
    "index": -1,
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
    incrementIndex();
    document.getElementById("nameText").innerHTML = pokemonList.pokemon[pokemonList.index].name;
    document.getElementById("typeText").innerHTML = pokemonList.pokemon[pokemonList.index].type;
    document.getElementById("heightText").innerHTML = pokemonList.pokemon[pokemonList.index].height;
    document.getElementById("weightText").innerHTML = pokemonList.pokemon[pokemonList.index].weight;
}

function setVisibility() {
    if (document.getElementById("creatureForm").style.display == "none") {
        showRoster();
    } else {
        hideRoster();
    }
}

function showRoster() {
    document.getElementById("creatureForm").style.display = "inline";
    document.getElementById("viewRosterButton").innerHTML = "Hide Roster";
}

function hideRoster() {
    document.getElementById("creatureForm").style.display = "none";
    document.getElementById("viewRosterButton").innerHTML = "Show Roster";
}

function incrementIndex() {
    if (pokemonList.index < (pokemonList.pokemon.length - 1)){
        pokemonList.index++;
    } else {
        pokemonList.index = 0;
    }
}