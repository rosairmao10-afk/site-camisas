// 1. ABRE/FECHA A ABA DE FILTROS (Com proteção de erro)
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (!aba) return; 
    
    if (aba.style.display === "flex") {
        aba.style.display = "none";
    } else {
        aba.style.display = "flex";
    }
}

// 2. FILTRA LIGAS 
function filtrarCategoria(categoria) {
    // AQUI FOI ALTERADO: Ignora a aba de promoções
    let cards = document.querySelectorAll(".card:not(.promocao)");
    cards.forEach(card => {
        if (categoria === "todos" || card.classList.contains(categoria)) {
            card.style.display = ""; 
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
    // AQUI FOI ALTERADO: Ignora a aba de promoções
    let cards = document.querySelectorAll(".card:not(.promocao)");

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
    
    // 4.1 AUTOMAÇÃO DE PERFORMANCE (Lazy Load para não travar)
    let todasAsImagens = document.querySelectorAll("img");
    todasAsImagens.forEach(img => {
        if (!img.getAttribute("loading")) {
            img.setAttribute("loading", "lazy");
        }
    });

    // Atalho: pesquisa no Enter
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") pesquisarCamisa();
        });
    }

    // Gerenciamento Automático de Etiquetas
    // AQUI FOI ALTERADO: Ignora a aba de promoções para não colar etiqueta duplicada
    let cards = document.querySelectorAll(".card:not(.promocao)");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        /* ETIQUETA LANÇAMENTO */
        if (texto.includes("26/27") || texto.includes("2026")) {
            if (!card.querySelector('.etiqueta-lancamento')) {
                let tagL = document.createElement("div");
                tagL.classList.add("etiqueta-lancamento");
                tagL.innerText = "LANÇAMENTO";
                card.appendChild(tagL);
            }
        }

        /* ETIQUETA MAIS VENDIDA */
        if (texto.includes("flamengo") || texto.includes("corinthians") || texto.includes("palmeiras") || texto.includes("são paulo") || texto.includes("vasco") || texto.includes("milan") || texto.includes("real madrid")) {
            if (!card.querySelector('.etiqueta-vendida')) {
                let tagV = document.createElement("div");
                tagV.classList.add("etiqueta-vendida");
                tagV.innerText = "MAIS VENDIDA";
                card.appendChild(tagV);
            }
        }
    });

    // 5. RESTAURANDO O EFEITO DE GIRAR A CAMISA AO CLICAR
    let containersImagem = document.querySelectorAll(".imagem-container");
    
    containersImagem.forEach(container => {
        let imagens = container.querySelectorAll("img");
        
        if (imagens.length >= 2) {
            imagens[1].style.display = "none";
            
            container.addEventListener("click", function() {
                if (imagens[0].style.display === "none") {
                    imagens[0].style.display = "block";
                    imagens[1].style.display = "none";
                } else {
                    imagens[0].style.display = "none";
                    imagens[1].style.display = "block";
                }
            });
        }
    });
});
