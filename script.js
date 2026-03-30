// 1. FUNÇÃO PARA ABRIR/FECHAR A ABA DE FILTROS
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. FUNÇÃO DOS BOTÕES DE LIGAS (CORRIGIDA)
function filtrarCategoria(categoria) {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        if (categoria === "todos") {
            card.style.display = ""; // Deixa o CSS original agir
        } else if (card.classList.contains(categoria)) {
            card.style.display = ""; // Deixa o CSS original agir
        } else {
            card.style.display = "none";
        }
    });
}

// 3. FUNÇÃO DA BARRA DE PESQUISA (CORRIGIDA)
function pesquisarCamisa() {
    let entrada = document.getElementById("campoPesquisa").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let conteudo = card.innerText.toLowerCase();
        if (conteudo.includes(entrada)) {
            card.style.display = ""; // Deixa o CSS original agir
        } else {
            card.style.display = "none";
        }
    });
}

// 4. LÓGICA AUTOMÁTICA AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", function() {
    
    // Atalho: Faz a pesquisa funcionar ao apertar a tecla "Enter"
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                pesquisarCamisa();
            }
        });
    }

    // Gerenciamento Automático de Etiquetas
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        /* ETIQUETA LANÇAMENTO */
        if (texto.includes("26/27")) {
            let tagL = document.createElement("div");
            tagL.classList.add("etiqueta-lancamento");
            tagL.innerText = "LANÇAMENTO";
            card.appendChild(tagL);
        }

        /* ETIQUETA MAIS VENDIDA */
        if (
            texto.includes("flamengo") ||
            texto.includes("corinthians") ||
            texto.includes("palmeiras") ||
            texto.includes("são paulo") ||
            texto.includes("vasco") ||
            texto.includes("milan") ||
            texto.includes("real madrid")
        ) {
            let tagV = document.createElement("div");
            tagV.classList.add("etiqueta-vendida");
            tagV.innerText = "MAIS VENDIDA";
            card.appendChild(tagV);
        }
    });
});
