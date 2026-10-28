var botaoCadastrar = document.getElementById("btn-cadastrarvinhos");

var botaoCadastrar = document.getElementById("btn-cadastrarvinhos");

botaoCadastrar.addEventListener("click", cadastrarVinho);

// funções reutilizáveis:
// Para validar entradas OK
// Para verificar se o estoque está baixo (menos de 5) Ok
// Para classificar o vinho (jovem, amadurecido, antigo)
// Para mostrar os dados no console com aviso por alert()


function validarEntrada(mensagem){
    var entrada = prompt(mensagem);
    while (entrada == 0 || entrada == "") {
        alert("Campo obrigatório!");
        entrada = prompt(mensagem);
    }

    return entrada;
}

function verificaEstoque(estoque) {
    if (estoque < 5) {
        return console.log("ALERTA! Estoque baixo!")
    }
}

function cadastrarVinho() {
    var continuar = "sim"
    while (continuar == "sim") {
        var nomeVinho = validarEntrada("Digite o nome do vinho:");
        var tipoVinho = validarEntrada("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
        var safraVinhos = validarEntrada("Digite a safra do vinho (ano):");
        var estoqueVinho = validarEntrada("Digite a quantidade em estoque:");

  


        console.log("===== DETALHES DO VINHO CADASTRADO =====");
        console.log("Nome: " + nomeVinho);
        console.log("Tipo: " + tipoVinho);
        console.log("Safra: " + safraVinhos);
        console.log("Quantidade em estoque: " + estoqueVinho);
        verificaEstoque(estoqueVinho)
        console.log("==============================================");

        continuar = prompt("Deseja cadastrar outro vinho? (Digite sim ou não)");

    }
    alert("Cadastro realizado! Veja os detalhes no console.");
}

