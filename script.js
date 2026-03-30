function filtrar(time){

let camisas = document.querySelectorAll(".camisa")

camisas.forEach(function(camisa){

if(time == "todos"){

camisa.style.display = "block"

}

else if(camisa.classList.contains(time)){

camisa.style.display = "block"

}

else{

camisa.style.display = "none"

}

})

}

let campo = document.getElementById("campoPesquisa")

campo.addEventListener("keypress", function(event){

if(event.key === "Enter"){

pesquisarCamisa()

}

})


function pesquisarCamisa(){

let input = document.getElementById("campoPesquisa").value.toLowerCase()

let camisas = document.querySelectorAll(".card")

camisas.forEach(function(camisa){

let texto = camisa.innerText.toLowerCase()

if(texto.includes(input)){

camisa.style.display = "block"

}else{

camisa.style.display = "none"

}

})

}

let campoPesquisa = document.getElementById("campoPesquisa")

campoPesquisa.addEventListener("keypress", function(event){

if(event.key === "Enter"){

pesquisarCamisa()

}

})

document.addEventListener("DOMContentLoaded", function(){

let camisas = document.querySelectorAll(".card")

camisas.forEach(function(camisa){

let texto = camisa.innerText.toLowerCase()

/* LANÇAMENTOS 26/27 */

if(texto.includes("26/27")){

let tag = document.createElement("div")
tag.classList.add("etiqueta-lancamento")
tag.innerText = "LANÇAMENTO"

camisa.appendChild(tag)

}

/* MAIS VENDIDAS NO BRASIL */

if(
texto.includes("flamengo") ||
texto.includes("corinthians") ||
texto.includes("palme") ||
texto.includes("são paulo") ||
texto.includes("vasco") ||
  texto.includes("milan") ||

function pesquisarCamisa() {
    // 1. Pega o texto que o usuário digitou
    let entrada = document.getElementById("campoPesquisa").value.toLowerCase();
    
    // 2. Busca todos os elementos que têm a classe "card" (seus produtos)
    let cards = document.querySelectorAll(".card");

    // 3. Percorre cada card para decidir se mostra ou esconde
    cards.forEach(card => {
        // Pega todo o texto dentro do card (Nome do time, temporada, preço)
        let conteudoCard = card.innerText.toLowerCase();

        // 4. Se o que foi digitado estiver no texto do card, ele aparece
        if (conteudoCard.includes(entrada)) {
            card.style.display = "flex"; // Usa flex para manter seu layout original
        } else {
            card.style.display = "none"; // Esconde o que não combina
        }
    });
}

// BÔNUS: Faz a busca funcionar ao apertar a tecla "Enter"
document.getElementById("campoPesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        pesquisarCamisa();
    }
});



                // 1. Função para abrir/fechar a aba de filtros
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. Função para filtrar as camisas por categoria
function filtrarCategoria(categoria) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Se clicar em 'todos', mostra tudo. Caso contrário, filtra pela classe.
        if (categoria === "todos") {
            card.style.display = "flex";
        } else if (card.classList.contains(categoria)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}
