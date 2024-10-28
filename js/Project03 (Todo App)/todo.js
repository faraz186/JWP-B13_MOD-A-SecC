var ulElement = document.getElementById("list");

function addTodo() {
  var input = document.getElementById("todoInput");

  if (input.value) {
    var liElement = document.createElement("li");

    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);

    // create delete button liElement

    var delBtnElement = document.createElement("button");

    var delBtnText = document.createTextNode("Delete");

    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);

    delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");

    // create edit button liElement

    var editBtnELement = document.createElement("button");

    var editBtnText = document.createTextNode("Edit");

    editBtnELement.appendChild(editBtnText);

    editBtnELement.setAttribute("onclick", "editItem(this)");

    liElement.appendChild(editBtnELement);

    console.log(liElement);

    input.value = "";
  } else {
    alert("fill the field..");
  }
}

function deleteAllItems() {
  ulElement.innerHTML = "";
}

// CRUD Operation

// C = CREATE
// R = READ
// U = UPDATE
// D = DELETE

function deleteSingleItem(e) {
  e.parentNode.remove();
}

function editItem(e) {
  var updatedVal = prompt("Enter updated value..");

  //   console.log(e.parentNode.firstChild.nodeValue);

  e.parentNode.firstChild.nodeValue = updatedVal;
}
