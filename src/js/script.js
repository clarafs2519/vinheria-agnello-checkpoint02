var botaoCadastrar = document.getElementById("btn-cadastrarvinhos");

botaoCadastrar.addEventListener("click", cadastrarVinho);

// funções reutilizáveis:
// Para validar entradas OK
// Para verificar se o estoque está baixo (menos de 5) Ok
// Para classificar o vinho (jovem, amadurecido, antigo) OK
// Para mostrar os dados no console com aviso por alert() OK

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
        return console.log("ALERTA! Estoque baixo!");
    }
}

function classificarVinho(safra) {
    var idade = 2026 - Number(safra);
    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 8) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function cadastrarVinho() {
    var continuar = "sim";
    var totalCadastros = 0;
    var estoqueBaixo = 0;
    var safraMaisAntiga = 9999;
    var vinhoMaisAntigo = "";

    while (continuar == "sim") {
        var nomeVinho = validarEntrada("Digite o nome do vinho:");
        var tipoVinho = validarEntrada("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
        var safraVinhos = validarEntrada("Digite a safra do vinho (ano):");
        var estoqueVinho = validarEntrada("Digite a quantidade em estoque:");

        totalCadastros = totalCadastros + 1;

        if (Number(estoqueVinho) < 5) {
            estoqueBaixo = estoqueBaixo + 1;
        }

        if (Number(safraVinhos) < safraMaisAntiga) {
            safraMaisAntiga = Number(safraVinhos);
            vinhoMaisAntigo = nomeVinho;
        }

        var classificacao = classificarVinho(safraVinhos);

        console.log("===== DETALHES DO VINHO CADASTRADO =====");
        console.log("Nome: " + nomeVinho);
        console.log("Tipo: " + tipoVinho);
        console.log("Safra: " + safraVinhos + " (" + classificacao + ")");
        console.log("Quantidade em estoque: " + estoqueVinho);
        verificaEstoque(estoqueVinho);
        console.log("=========================================");

        continuar = prompt("Deseja cadastrar outro vinho?");
    }

    alert("Cadastro finalizado!\nTotal de cadastros: " + totalCadastros + "\nEstoque baixo: " + estoqueBaixo + "\nVinho mais antigo: " + vinhoMaisAntigo);
}