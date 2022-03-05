fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => console.log(data.results));

let tr = document.createElement("tr");
tr.setAttribute("id", "div1");  

let id = document.createElement("td");
let nameV = document.createElement("td");
let statusV = document.createElement("td");
let specieV = document.createElement("td");
id.textContent = 2
nameV.textContent = 'Nombre'
statusV.textContent = 'Estado'
specieV.textContent = 'Animal'
document.getElementById("myList").appendChild(id);
document.getElementById("myList").appendChild(nameV);
document.getElementById("myList").appendChild(statusV);
document.getElementById("myList").appendChild(specieV);