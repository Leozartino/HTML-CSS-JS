const $myButton = document.querySelector("button");
const $nomePessoa = prompt("Olá, qual é o seu nome?");
const $num1 = prompt("Digite um número:");
const $num2 = prompt("Digite outro número:");
const $paragra = document.querySelector("p");
const soma = Number($num1) + Number($num2);

$paragra.innerHTML = `By ${$nomePessoa}`;

alert("A soma dos valores é: " + soma);
alert(`Seja bem vindo, ${$nomePessoa}`);

$myButton.onclick = () => alert(`Olá, como você está ${$nomePessoa}?`);

/* let num1 = 0;
const arr = [0, 5, 6, 7, 8];

//num1 recebe cada elemento do array
for (num1 of arr) {
  num1 = num1 + 1;
  console.log(num1);
} 
const objeto = { a: 1, b: 2, c: 3 };

//elem recebe cada numeração do indice do array
//elem recebe cada chave do objeto
for (let elem in objeto) {
  console.log(`chave: ${elem}\nvalor: ${objeto[elem]}`);
}
 */
