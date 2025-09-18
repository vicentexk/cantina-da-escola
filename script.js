//passo 1 - declarando variáveis
var nomeCantina = "Cantina da Escola"; //nome da cantina
let salgados = 20; //quantidade inicial de salgados disponiveis
const precosalgado = 5; //preco fixo de cada salgado
let totalvendido = 0; //total de dinheiro arrecadado

//função para atualizar o texto da pagina
function atualizarstatus() {
    const status = document.getElementById("status"); //pega o elemento  html com id status
    status.innerHTML =
    Bem-vindo à <strong> ${nomeCantina} </strong>. <br>
    temos <strong>${salgados} </strong> salgados disponiveis.<br>
        Total vendido: <strong>R$${totalVendido}</strong>.

}
 
//função para vender 1 salgado
document.getElementById("venderSalgado").addEventListener("click", () => {
    //verifica se tem 1 salgado disponivel
    if (salgados >= 1 {
    salgados -= 1; //subtrai 1 da quantidade de salgados
    totalvendido += 1 * precosalgado; //atualiza o total vendido de 1 salgado (salgado* preco)
    atualizarStatus(); //atualiza informaçoes da pagina
    } else{
        // se nao houver salgados suficientes dara um aviso
    alert("não ha salgados suficientes para vender!");
}
    });

    //inicializa a pagina com o status atual
    atualizarstatus();