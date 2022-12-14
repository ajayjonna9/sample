// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const userList = document.querySelector("#users");

// Listen for form submit
let id;
let edit = false;
myForm.addEventListener("submit", onSubmit);
var c = 0;
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
    //(localStorage.getItem(emailInput.value) === null)
  } else {
    //createElementNode(nameInput.value, emailInput.value);

    createObject();
  } /* else {
    let removeEle = document.querySelectorAll("li");

    removeEle.forEach((el) => {
      if (JSON.stringify(el.textContent).includes(emailInput.value)) {
        el.remove();
      }
    });
    createElementNode(nameInput.value, emailInput.value);
    createObject();
  }*/
}

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data")
    .then((res) => {
      console.log(res.data);
      res.data.forEach((key) => {
        createElementNode(key.name, key.email, key._id);
      });
    });
  // var key = Object.keys(localStorage);

  // key.forEach((key) => {
  //   let text = JSON.parse(localStorage.getItem(key));
  //   const li = document.createElement("li");
  //   createElementNode(text.name, text.email);
  //   // Add text node with input values
  // });
});

userList.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  if (e.target.className === "removebtn") {
    const id = e.target.name;
    axios
      .delete(
        `https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data/${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        document.body.innerHTML = `<h2> ${err}</h2>`;
      });
    // let ind = e.target.parentElement.innerText.indexOf(":");

    // let last = e.target.parentElement.innerText.indexOf("\n");

    // let keyEmail = e.target.parentElement.innerText.substring(ind + 2, last);
    // localStorage.removeItem(keyEmail);

    e.target.parentElement.remove();
  }
  if (e.target.className === "editbtn") {
    id = e.target.name;
    edit = true;
    axios
      .get(
        `https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data/${id}`
      )
      .then((res) => {
        console.log(res.data);

        nameInput.value = res.data.name;
        emailInput.value = res.data.email;
      });
    e.target.parentElement.remove();
    //axios.put(`https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data/${id}`)

    // let ind = e.target.parentElement.innerText.indexOf(":");

    // let last = e.target.parentElement.innerText.indexOf("\n");

    // let keyEmail = e.target.parentElement.innerText.substring(ind + 2, last);
    // let keyName = e.target.parentElement.innerText.substring(0, ind);
    // nameInput.value = keyName;
    // emailInput.value = keyEmail;
    // localStorage.removeItem(keyEmail);
  }
});

function createElementNode(name, email, id) {
  const li = document.createElement("li");
  const editdtn = document.createElement("button");
  editdtn.appendChild(document.createTextNode("Edit"));
  const removedtn = document.createElement("button");
  removedtn.appendChild(document.createTextNode("X"));
  const att = document.createAttribute("name");
  const att1 = document.createAttribute("name");

  att.value = id;
  att1.value = id;

  editdtn.setAttributeNode(att);
  removedtn.setAttributeNode(att1);
  // Add text node with input values
  li.appendChild(document.createTextNode(`${name}: ${email}`));

  li.appendChild(removedtn);
  li.appendChild(editdtn);

  removedtn.classList.add("removebtn");
  editdtn.classList.add("editbtn");

  // Add HTML
  // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

  // Append to ul
  userList.appendChild(li);
}
function createObject() {
  let myobj = {
    name: nameInput.value,
    email: emailInput.value,
  };
  if (edit === true) {
    console.log(edit);
    axios
      .put(
        `https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data/${id}`,
        myobj
      )
      .then((res) => {
        console.log(res);
        axios
          .get(
            `https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data/${id}`
          )
          .then((res) => {
            createElementNode(res.data.name, res.data.email, res.data._id);
          });

        //createElementNode(res.data.name, res.data.email, res.data._id);
      })
      .catch((err) => {
        document.body.innerHTML = `<h2> ${err}</h2>`;
      });
  } else {
    axios
      .post(
        "https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data",
        myobj
      )
      .then((res) => {
        console.log(res.data);
        createElementNode(res.data.name, res.data.email, res.data._id);
      })
      .catch((err) => {
        document.body.innerHTML = `<h2> ${err}</h2>`;
      });
  }
  //let myObj = JSON.stringify(myobj);
  //localStorage.setItem(myobj.email, myObj);

  // Clear fields
  nameInput.value = "";
  emailInput.value = "";
}
