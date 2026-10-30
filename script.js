// Dicionário e alfabeto definidos na aula
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const dicionario = "qwertyuiopasdfghjklzxcvbnm";

// 1. Criptografia por Dicionário (equivalente ao ord() - ord('a') do Python)
function codifica(senha) {
    let senha_criptografada = "";
    for (let i = 0; i < senha.length; i++) {
        let letra = senha[i];
        if (letra >= 'a' && letra <= 'z') {
            let posicao = letra.charCodeAt(0) - 'a'.charCodeAt(0);
            senha_criptografada += dicionario[posicao];
        } else {
            senha_criptografada += letra; // Preserva números, maiúsculas e símbolos
        }
    }
    return senha_criptografada;
}

// 2. Função Hash por Soma ASCII (equivalente ao ord(letra) do Python)
function calcula_hash(senha) {
    let valor = 0;
    for (let i = 0; i < senha.length; i++) {
        valor += senha.charCodeAt(i);
    }
    return valor;
}

// Simulação do Banco de Dados
const senha_cadastrada = "marcelo123";
const hash_cadastrado = calcula_hash(senha_cadastrada);

// Ações da Interface
function executarCriptografia() {
    let inputVal = document.getElementById("senhaCifrar").value;
    let resultado = codifica(inputVal);
    document.querySelector("#resultadoCripto span").innerText = resultado;
}

function executarHash() {
    let inputVal = document.getElementById("senhaHash").value;
    let resultado = calcula_hash(inputVal);
    document.querySelector("#resultadoHash span").innerText = resultado;
}

function executarLogin() {
    let senhaDigitada = document.getElementById("senhaLogin").value;
    let hashDigitado = calcula_hash(senhaDigitada);
    let caixaResultado = document.getElementById("resultadoLogin");
    let spanResultado = document.querySelector("#resultadoLogin span");

    // Comparação de Hashes (mesma regra do algoritmo das aulas)
    if (hash_cadastrado === hash_digitado) {
        caixaResultado.className = "result sucesso";
        spanResultado.innerText = "Acesso liberado! (Hashes iguais)";
    } else {
        caixaResultado.className = "result erro";
        spanResultado.innerText = "Acesso negado! (Hashes diferentes)";
    }
}
