// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    const msg = document.querySelector(".msg");
    let para = document.createElement("h5");
    para.appendChild(document.createTextNode("Please enter all fields"));
    msg.appendChild(para);
    //alert("Please enter all fields");
    para.className = "error";
    //msg.innerText = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => para.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);
    localStorage.setItem(nameInput.value, emailInput.value);
    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
