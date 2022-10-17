/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clacada pelo ususario e esconter o ceontúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que repesentam as abas no 
    HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da aba

    - passo 3 - quando o ususário clicar, desmarcar a aba selecionada

    - passo 4 - marcar a aba clicada como selecionada

    - passo 5 - esconter o conteúdo interior

    - passo 6 - mostrar o conteúdo da aba selecionada

*/
// - passo 1 - dar um jeito de pegar os elementos que repesentam as abas no HTML

const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {
        
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 - quando o ususário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    // passo 4 - marcar a aba clicada como selecionada
    aba.classList.add("selecionado");
    console.log('selecionarAba', aba)
}

function mostrarInformacoesDaAba(aba) {
    // passo 5 - esconter o conteúdo interior
    const informacaoSelecionada = document.querySelector("#informacao-sobre-mim > div.informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    console.log(aba);
    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const InformacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    InformacaoASerMostrada.classList.add("selecionado")

}