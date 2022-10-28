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
let li = document.getElementsByTagName("li");
console.log(li);
for (let i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
}
let lielement = document.querySelector(".list-group-item");
console.log(lielement);
let a = document.querySelector(".list-group-item:nth-child(2)");
a.style.color = "green";
let lielements = document.querySelectorAll(".list-group-item");
console.log(lielements);
for (let i = 1; i < lielements.length; i = i + 2) {
  lielements[i].style.backgroundColor = "red";
}
let parent = document.querySelector("#items");
console.log(parent.parentNode);
let ndiv = document.createElement("div");
ndiv.className = "hello";
ndiv.id = "hi";
ndiv.setAttribute("title", "hello");
let tdiv = document.createTextNode("hello Ajay");
ndiv.appendChild(tdiv);
console.log(ndiv);
let container = document.querySelector("header .container");
let head1 = document.querySelector("header h1");
container.append(ndiv);
//container.insertBefore(ndiv, head1);
