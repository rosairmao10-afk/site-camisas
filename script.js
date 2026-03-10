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
texto.includes("barcelona") ||
texto.includes("real madrid") ||
texto.includes("brasil")
){

let tag2 = document.createElement("div")
tag2.classList.add("etiqueta-vendida")
tag2.innerText = "MAIS VENDIDA"

camisa.appendChild(tag2)

}

})


})function toggleOrdenar(){

let menu = document.getElementById("menuOrdenar")

menu.style.display =
menu.style.display === "block" ? "none" : "block"

}


function ordenarAZ(){

ordenar((a,b)=>a.nome.localeCompare(b.nome))

}

function ordenarZA(){

ordenar((a,b)=>b.nome.localeCompare(a.nome))

}

function ordenarPrecoMenor(){

ordenar((a,b)=>a.preco-b.preco)

}

function ordenarPrecoMaior(){

ordenar((a,b)=>b.preco-a.preco)

}

function ordenarRelevancia(){

location.reload()

}


function ordenar(comparador){

let catalogo = document.querySelector(".catalogo")

let cards = Array.from(document.querySelectorAll(".card"))

cards.sort((a,b)=>{

let nomeA = a.querySelector("h3").innerText

let nomeB = b.querySelector("h3").innerText

let precoA = parseFloat(a.querySelector(".preco").innerText.replace("R$","").replace(",", "."))

let precoB = parseFloat(b.querySelector(".preco").innerText.replace("R$","").replace(",", "."))

return comparador({nome:nomeA,preco:precoA},{nome:nomeB,preco:precoB})

})

catalogo.innerHTML=""

cards.forEach(card=>catalogo.appendChild(card))

}
