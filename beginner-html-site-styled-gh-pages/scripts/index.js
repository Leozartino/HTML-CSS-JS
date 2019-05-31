//Armazenando a referência dos elementos escritos no index.html em variavéis.
//é útil para uso posterior, geralmente elementos que podem ser alterados por funções
//mais de uma vez durante as interações do usuário, por exemplo.
const $myImage = document.getElementById("img01");
const $myButton = document.getElementById("button01");
const $myHeading = document.getElementById("firstH1");

//Função onclick, é chamada outra função quando o elemento referenciado é cliclado.
$myImage.onclick = () => {
  let mySrc = $myImage.getAttribute("src");
  mySrc === "images/firefox-icon.png"
    ? $myImage.setAttribute("src", "images/imageTeste.png")
    : $myImage.setAttribute("src", "images/firefox-icon.png");
};

//Função que pergunta o nome do usuário e persiste no localStorage, após isso
//é limpado o H1 armazenado e é alterado por uma string que contenha o valor do
//nome do indivíduo que digitou anteriormente na caixa de diálogo!
function setUserName() {
  let myName = prompt("Please enter your name:");
  localStorage.setItem("name", myName);
  $myHeading.innerHTML = `Mozila is cool, ${myName}`;
}

//Condicional que verifica se existe a chave "name" no localStorage
//(se existir uma chave eventualmente existe um valor)
//Caso não exista, ele chama a função para o usuário informar o nome
//Se já existir, retornado no H1 a string com o nome armazenado no localStorage
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name"); //pegando a chave-valor do item "name"
  $myHeading.innerHTML = `Mozila is cool, ${storedName}`; //Retornando a string com o nome armazenado
}

//Função callback para mudar o nome do usuário, caso ele clique no botão que
//é referenciado por esta variavel
$myButton.onclick = () => {
  setUserName();
};

console.log("Isso é um teste");
