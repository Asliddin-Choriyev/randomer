let input = document.querySelector("input");
let goal = document.querySelector("textarea");
let display = document.querySelector(".display");

function random() {
  let names = input.value;
  names = names.split(",");
  let randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  display.textContent = `${goal.value}:${randomName}`;
}
