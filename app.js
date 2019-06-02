const app = require("express")();
const port = 3000;

app.listen(port, (req, res) => console.log("Servidor rodando!"));

app.get("/empregados/ti", (req, res) => res.send(empregados));

//O cabeçalho de uma requisição HTTP tem diversas coisas
app.post("/empregados/ti", (req, res) => {
  const novoFuncionario = {
    nome: "Junior",
    funcao: "ScrumMaster"
  };

  empregados.push(novoFuncionario);
  res.send("Funcionário inserido com sucesso!");
});

app.put("/empregados/ti/:id", (req, res) => {
  res.send(req.params);
});

const empregados = [
  { nome: "Leonardo", funcao: "Desenvolvedor" },
  { nome: "Paula", funcao: "DesingUX" },
  { nome: "João", funcao: "Gerente" }
];
