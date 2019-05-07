function getPokemon() {

  // HTML div variables
  var input = document.getElementById("input").value;
  var url = "https://pokeapi.co/api/v2/pokemon/";
  // API variables
  var id = document.getElementById("id");
  var identity = document.getElementById("identity");
  var picture = document.getElementById("pic");
  var moves = document.getElementById("moves");
  // var evolution = document.getElementById("evolution");
  var screenText1 = document.getElementById("screenText1");
  
  if (input != null) {
    // Empty fields
	id.innerHTML = "";
	identity.innerHTML = "";
	picture.innerHTML = "";
	moves.innerHTML = "";

    // Ajax request
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", url + input, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.response);
      


      // Make text div appear
      nameText.style.display = "inline-block";
      moveText.style.display = "inline-block";
      idText.style.display = "inline-block";
      // evolutionText.style.display = "inline-block";
      screenText1.style.display = "block";

      // Make Pokemon details appear
      id.innerHTML = data.id;
      identity.innerHTML = data.name;
      picture.innerHTML = "<img class='image' src='" + data.sprites.front_default + "'/>";
      for (let i = 0; i < 4; i++) {
      moves.innerHTML += data.moves[i].move.name;
      };
      // evolution.innerHTML = "";
    }    
  } else {
    alert("This Pokemon doesn't exist");
  }
  xhr.send();
}

document.getElementById("search").addEventListener("click", getPokemon);