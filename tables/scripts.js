fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
.then(function(data) {
  let characters = data.results;
  return characters.map(function(character) {
    console.log(character)

    /*Create row container*/
    let tr = document.createElement("tr");
    tr.setAttribute("id", 'id_'+character.id);  
    let container = document.getElementById("dataContainer")
    container.appendChild(tr)

    /*Create each row*/
    let id = document.createElement("td");
    let nameC = document.createElement("td");
    let statusC= document.createElement("td");
    let specieC = document.createElement("td");

    /*Add Action Icons */
    let action = document.createElement("td");
    action.setAttribute("id",'idAction_'+character.id)
    let actionD = document.createElement("i");
    actionD.setAttribute("class","fa-solid fa-circle-xmark")
    let actionConfig = document.createElement("i");
    actionConfig.setAttribute("class","fa-solid fa-gear")
    action.appendChild(actionD)
    action.appendChild(actionConfig)

    id.textContent = character.id
    nameC.textContent = character.name
    statusC.textContent = character.status
    specieC.textContent = character.species

    document.getElementById('id_'+character.id).appendChild(id);
    document.getElementById('id_'+character.id).appendChild(nameC);
    document.getElementById('id_'+character.id).appendChild(statusC);
    document.getElementById('id_'+character.id).appendChild(specieC);
    document.getElementById('id_'+character.id).appendChild(action);
  })
})


