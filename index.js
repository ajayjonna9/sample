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
    let j = 0;
    let bool = true;
    for (let i = 0; i < localStorage.length; i++) {
      let temp = "myobj" + j++;
      console.log(temp);
      console.log(JSON.parse(localStorage.getItem(temp)).email);

      if (JSON.parse(localStorage.getItem(temp)).email === emailInput.value) {
        bool = false;
        const msg = document.querySelector(".msg");
        let para = document.createElement("h5");
        para.appendChild(document.createTextNode("email is already taken"));
        msg.appendChild(para);
        //alert("Please enter all fields");
        para.className = "error";
        setTimeout(() => para.remove(), 3000);
      }
    }
    if (bool) {
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

      let myobj = {
        name: nameInput.value,
        email: emailInput.value,
      };
      let a = "myobj" + c++;
      let myObj = JSON.stringify(myobj);
      localStorage.setItem(a, myObj);

      console.log(localStorage);
      // Clear fields
      nameInput.value = "";
      emailInput.value = "";
  }
}
