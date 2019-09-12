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
    setVisibility();
    document.getElementById("nameText").innerHTML = pokemonList.pokemon[pokemonList.index].name;
    document.getElementById("typeText").innerHTML = pokemonList.pokemon[pokemonList.index].type;
    document.getElementById("heightText").innerHTML = pokemonList.pokemon[pokemonList.index].height;
    document.getElementById("weightText").innerHTML = pokemonList.pokemon[pokemonList.index].weight;
    incrementIndex();
}

function setVisibility() {
    if (document.getElementById("nameLabel").style.visibility == "hidden") {
        document.getElementById("nameLabel").style.visibility = "visible";
    }
    if (document.getElementById("typeLabel").style.visibility == "hidden") {
        document.getElementById("typeLabel").style.visibility = "visible";
    }
    if (document.getElementById("heightLabel").style.visibility == "hidden") {
        document.getElementById("heightLabel").style.visibility = "visible";
    }
    if (document.getElementById("weightLabel").style.visibility == "hidden") {
        document.getElementById("weightLabel").style.visibility = "visible";
    }
}

function incrementIndex() {
    if (pokemonList.index < (pokemonList.pokemon.length - 1)){
        pokemonList.index++;
    } else {
        pokemonList.index = 0;
    }
}