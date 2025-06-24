const input = document.querySelector(".input");

const output = document.querySelector(".output");

input.addEventListener("keyup", function () {
  output.value = input.value;
});

output.addEventListener("keyup", function () {
  input.value = output.value;
});
