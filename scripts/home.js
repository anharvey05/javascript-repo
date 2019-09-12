function buttonClick() {
    if (document.getElementById('dateTimeText').innerHTML == "") {
        document.getElementById('dateTimeText').innerHTML = Date();
        document.getElementById('dateTimeButton').innerHTML = "Click to Collapse!";
    } else {
        document.getElementById('dateTimeText').innerHTML = "";
        document.getElementById('dateTimeButton').innerHTML = "Click for Date/Time!";
    }
}

var index = 0;
var pokemonList = { 
    "pokemon": [ 
        { "name": "Bulbasaur",
            "type": "Grass",
            "height": "2'04",
            "weight": "15.2lbs" },
        { "name": "Charmander",
            "type": "Fire",
            "height": "2'0",
            "weight": "18.7lbs" },
        { "name": "Squirtle",
            "type": "Water",
            "height": "1'08",
            "weight": "19.8lbs" }
    ]
};

function displayPokemon() {
    //When button is clicked, display current creature
    //Update index value so next creature is displayed when clicked again
    document.getElementById("nameText").innerHTML = pokemonList.pokemon[index].name;
    document.getElementById("typeText").innerHTML = pokemonList.pokemon[index].type;
    document.getElementById("heightText").innerHTML = pokemonList.pokemon[index].height;
    document.getElementById("weightText").innerHTML = pokemonList.pokemon[index].weight;

    if (index < (pokemonList.pokemon.length - 1)){
        index++;
    } else {
        index = 0;
    }

}