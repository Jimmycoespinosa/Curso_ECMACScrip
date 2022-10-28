import getData from "./api.js";

function solution() {
  // Tu código aquí 👈
    getData()
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

solution();
