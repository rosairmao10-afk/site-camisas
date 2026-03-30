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


<script>
    // Esta função vai rodar AUTOMATICAMENTE após 3 segundos
    setTimeout(function() {
        // Tenta encontrar o loader pelo ID que definimos antes
        var loader = document.getElementById("loader-wrapper");
        
        if (loader) {
            // Se encontrar, ele força o desaparecimento imediato
            loader.style.display = "none";
            console.log("Loader removido com sucesso!");
        } else {
            // Se não encontrar, ele avisa no console do navegador (F12)
            console.error("Erro: Não encontrei o elemento com ID 'loader-wrapper'");
        }
    }, 3000); // 3000 milissegundos = 3 segundos
</script>
