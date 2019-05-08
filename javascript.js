function getPokemon() {

  // API variable
  var api_1 = "https://pokeapi.co/api/v2/pokemon/";
  var api_2 = "https://pokeapi.co/api/v2/pokemon-species/";

  // HTML variable
  var input = document.getElementById("input").value;
  var id = document.getElementById("id");
  var identity = document.getElementById("identity");
  var picture = document.getElementById("pic");
  var moves = document.getElementById("moves");
  var screenText1 = document.getElementById("screenText1");
  var screenText2 = document.getElementById("screenText2");
  var screenText3 = document.getElementById("screenText3");
  var picture2 = document.getElementById("pic2");
  
  if (input != null) {
  
    // Empty all fields before searching
    id.innerHTML = "";
    identity.innerHTML = "";
    picture.innerHTML = "";
    picture2.innerHTML = "";    
    moves.innerHTML = "";
    screenText1.style.display = "";
    screenText2.style.display = "";
    screenText3.style.display = "";

    // Ajax request
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", api_1 + input, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.response);
      
      // Make text div appear
      nameText.style.display = "inline-block";
      moveText.style.display = "inline-block";
      idText.style.display = "inline-block";
      screenText1.style.display = "block";
      screenText2.style.display = "block";

      // Make Pokemon details appear
      id.innerHTML = data.id;
      identity.innerHTML = data.name;
      picture.innerHTML = "<img class='image' src='" + data.sprites.front_default + "'/>";
      for (let i = 0; i < 4; i++) {
      moves.innerHTML += data.moves[i].move.name;
      };
      
      // Get previous evolution name
      var evolution = data.species.name;
        
        if (evolution) {
          var xhr2 = new XMLHttpRequest();
              xhr2.open('GET', api_2 + evolution, true);
              xhr2.onload = function() {
                var data2 = JSON.parse(xhr2.response);
                screenText3.innerHTML = data2.evolves_from_species.name;

                // Get previous evolution picture
                var evolutionName = data2.evolves_from_species.name;
                 xhr.open('GET', api_1 + evolutionName, true);
                    xhr.onload = function() {
                      var data = JSON.parse(xhr.response);
                      pic2.innerHTML = "<img class='image' src='" + data.sprites.front_default + "'/>";
                    } 
                xhr.send();
              } 
            xhr2.send();
        };
    }    
  } else {
    alert("This Pokemon doesn't exist");
  }
  xhr.send();
}

document.getElementById("search").addEventListener("click", getPokemon);


