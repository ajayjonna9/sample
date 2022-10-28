let formevent = document.querySelector("#addForm");
var itemList = document.getElementById("items");
formevent.addEventListener("submit", (e) => {
  e.preventDefault();
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem.value));
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right ml-1 delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  let editbtn = document.createElement("button");
  editbtn.className = "btn btn-primary btn-sm float-right edit";
  editbtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editbtn);

  newItem.value = "";
});
itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure")) {
      let temp = e.target.parentElement;
      itemList.removeChild(temp);
    }
  }
});
