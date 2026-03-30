// 1. ABRE E FECHA A ABA DE FILTROS
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. FILTRA PELOS BOTÕES DE LIGAS (CATEGORIAS)
function filtrarCategoria(categoria) {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        if (categoria === "todos") {
            card.style.display = "flex";
        } else if (card.classList.contains(categoria)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// 3. BARRA DE PESQUISA POR TEXTO
function pesquisarCamisa() {
    let entrada = document.getElementById("campoPesquisa").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let conteudo = card.innerText.toLowerCase();
        if (conteudo.includes(entrada)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// 4. FAZ A PESQUISA FUNCIONAR COM A TECLA ENTER
// Usamos um verificador 'if' para garantir que o elemento existe antes de ouvir o teclado
document.addEventListener("DOMContentLoaded", function() {
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                pesquisarCamisa();
            }
        });
    }

    // 5. COLOCA ETIQUETAS DE LANÇAMENTO AUTOMATICAMENTE
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        if (texto.includes("26/27") || texto.includes("2026")) {
            let tag = document.createElement("div");
            tag.classList.add("etiqueta-lancamento");
            tag.innerText = "LANÇAMENTO";
            card.appendChild(tag);
        }
    });
});
