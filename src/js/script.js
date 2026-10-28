var botaoCadastrar = document.getElementById("btn-cadastrarvinhos");

var botaoCadastrar = document.getElementById("btn-cadastrarvinhos");

botaoCadastrar.addEventListener("click", cadastrarVinho);

function cadastrarVinho() {
    var nomeVinho = prompt("Digite o nome do vinho:");
    var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
    var safraVinhos = prompt("Digite a safra do vinho (ano):");
    var estoqueVinho = prompt("Digite a quantidade em estoque:");

    alert("Cadastro realizado! Veja os detalhes no console.");

    alert("A seguir, veja os detalhes do vinho no console.");

    console.log("===== DETALHES DO VINHO CADASTRADO =====");
    console.log("Nome: " + nomeVinho);
    console.log("Tipo: " + tipoVinho);
    console.log("Safra: " + safraVinhos);
    console.log("Quantidade em estoque: " + estoqueVinho);
    console.log("==============================================");
}

