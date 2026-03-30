// 1. FUNÇÃO PARA ABRIR/FECHAR A ABA DE FILTROS
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    // Alterna entre mostrar (flex) e esconder (none)
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. FUNÇÃO DOS BOTÕES DE LIGAS (FILTRAR POR CATEGORIA)
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

// 3. FUNÇÃO DA BARRA DE PESQUISA (PESQUISAR POR TEXTO)
function pesquisarCamisa() {
    let entrada = document.getElementById("campoPesquisa").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let conteudo = card.innerText.toLowerCase();
        // Se o texto digitado estiver no card, ele aparece
        if (conteudo.includes(entrada)) {
            card.style.display = "flex";
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

        /* ETIQUETA LANÇAMENTO (Se tiver '26/27' no texto) */
        if (texto.includes("26/27")) {
            let tagL = document.createElement("div");
            tagL.classList.add("etiqueta-lancamento");
            tagL.innerText = "LANÇAMENTO";
            card.appendChild(tagL);
        }

        /* ETIQUETA MAIS VENDIDA (Sua lógica de times populares corrigida) */
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
