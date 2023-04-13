// const countValue = document.querySelector("#counter");

// const increment = () => {
//   let value = parseInt(countValue.innerText); //changes string to integer
//   value = value + 1;
//   countValue.innerText = value;
// };

// const decrement = () => {
//   let value = parseInt(countValue.innerText); //changes string to integer
//   value = value - 1;
//   countValue.innerText = value;
// };

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

const countValue = document.querySelector("#counter");
const plusSym = document.querySelector("#plus");
const minusSym = document.querySelector("#minus");

plusSym.addEventListener("click", function () {
  let value = parseInt(countValue.innerText);
  value = value + 1;
  countValue.innerText = value;
});

minusSym.addEventListener("click", function () {
  let value = parseInt(countValue.innerText);
  value = value - 1;
  countValue.innerText = value;
});
