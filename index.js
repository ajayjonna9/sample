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
