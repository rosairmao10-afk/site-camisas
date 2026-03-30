// 1. ABRE/FECHA A ABA DE FILTROS (Com proteção de erro)
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (!aba) return; // Se não achar a aba, ignora e não trava o site
    
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. FILTRA LIGAS (Procura por .card ou .camisa)
function filtrarCategoria(categoria) {
    let cards = document.querySelectorAll(".card, .camisa");
    cards.forEach(card => {
        if (categoria === "todos" || card.classList.contains(categoria)) {
            card.style.display = ""; // Volta ao normal do CSS
        } else {
            card.style.display = "none";
        }
    });
}

// 3. BARRA DE PESQUISA POR TEXTO
function pesquisarCamisa() {
    let campo = document.getElementById("campoPesquisa");
    if (!campo) return; 

    let entrada = campo.value.toLowerCase();
    let cards = document.querySelectorAll(".card, .camisa");

    cards.forEach(card => {
        let conteudo = card.innerText.toLowerCase();
        if (conteudo.includes(entrada)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// 4. LÓGICA AUTOMÁTICA AO CARREGAR O SITE
document.addEventListener("DOMContentLoaded", function() {
    
    // Configura a tecla Enter
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") pesquisarCamisa();
        });
    }

    // Coloca as Etiquetas Sozinho
    let cards = document.querySelectorAll(".card, .camisa");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        if (texto.includes("26/27") || texto.includes("2026")) {
            // Só adiciona se já não tiver uma etiqueta lá dentro
            if (!card.querySelector('.etiqueta-lancamento')) {
                let tagL = document.createElement("div");
                tagL.classList.add("etiqueta-lancamento");
                tagL.innerText = "LANÇAMENTO";
                card.appendChild(tagL);
            }
        }

        if (texto.includes("flamengo") || texto.includes("corinthians") || texto.includes("palmeiras") || texto.includes("são paulo") || texto.includes("vasco") || texto.includes("milan") || texto.includes("real madrid")) {
            if (!card.querySelector('.etiqueta-vendida')) {
                let tagV = document.createElement("div");
                tagV.classList.add("etiqueta-vendida");
                tagV.innerText = "MAIS VENDIDA";
                card.appendChild(tagV);
            }
        }
    });
});
