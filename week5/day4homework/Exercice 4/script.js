// Exercice 4
const form = document.getElementById("MyForm");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const submit = document.getElementById("submit");
const NUMBER_OF_DECIMALS = 2;
function handleSubbmit(event) {
  event.preventDefault();
  const r = Number(radius.value);
  if (Number.isNaN(r)) return;
  const v = (4 / 3) * Math.PI * r ** 3;
  volume.value = v.toFixed(NUMBER_OF_DECIMALS);
}
form.addEventListener("submit", handleSubbmit);handleS

