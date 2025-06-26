const input = document.querySelector(".input");

const output = document.querySelector(".output");

input.addEventListener("keyup", function () {
  output.value = input.value;
});

output.addEventListener("keyup", function () {
  input.value = output.value;
});

fontfamily.addEventListener("click", function () {
  let value = this.value;
  document.querySelector(".output").style.fontFamily = `${value},sans-serif`;
});
