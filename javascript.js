function getPokemon() {

  // HTML div variables
  var input = document.getElementById("input").value;
  var url = "https://pokeapi.co/api/v2/pokemon/";
  var nameText = document.getElementById("nameText");
  var moveText = document.getElementById("moveText");
  var idText = document.getElementById("idText");
  var evolutionText = document.getElementById("evolutionText");
  
  if (input != null) {
    // Ajax request
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", url + input, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.response);
      
      // API variables
      var id = document.getElementById("id");
      var identity = document.getElementById("identity");
      var picture = document.getElementById("pic");
      var moves = document.getElementById("moves");
      var evolution = document.getElementById("evolution");

      // Make text div appear
      nameText.style.display = "block";
      moveText.style.display = "block";
      idText.style.display = "block";
      evolutionText.style.display = "block";

      // Make Pokemon details appear
      id.innerHTML = data.id;
      identity.innerHTML = data.name;
      picture.innerHTML = "<img src='" + data.sprites.front_default + "'/>";
      for (let i = 0; i < 4; i++) {
      moves.innerHTML += data.moves[i].move.name;
      };
      evolution.innerHTML = "I have no idea how to do this";
    }    
  } else {
    alert("This Pokemon doesn't exist");
  }
  xhr.send();
}

document.getElementById("search").addEventListener("click", getPokemon);