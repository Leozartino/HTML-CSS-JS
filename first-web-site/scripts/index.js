const $myButton = document.querySelector("button");
const $nomePessoa = prompt("Olá, qual é o seu nome?");

$myButton.onclick = () => alert(`Olá, ${$nomePessoa}!`);
