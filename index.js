document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/0777fea550e44d1db52114746573f4b3/data")
    .then((res) => {
      console.log(res.data);
      res.data.forEach((key) => {
        createElementNode(key.name, key.email);
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
