console.log(document);
console.log(document.title);
let title = document.getElementById("header-title");
title.style.borderBottom = "solid 5px red";
let item = document.querySelector(".title");
item.style.color = "green";
item.style.fontWeight = "bold";
let list = document.getElementsByClassName("list-group-item");
console.log(list);
list[2].style.backgroundColor = "green";
for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
