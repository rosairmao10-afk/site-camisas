// 1. ABRE/FECHA A ABA DE FILTROS
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
    let cards = document.querySelectorAll(".card, .camisa");
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

// 4. LÓGICA AUTOMÁTICA E TROCA DE IMAGEM
document.addEventListener("DOMContentLoaded", function() {
    
    // Pesquisa no Enter
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") pesquisarCamisa();
        });
    }

    // Etiquetas Automáticas
    let cards = document.querySelectorAll(".card, .camisa");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        if (texto.includes("26/27") || texto.includes("2026")) {
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

    // 5. O QUE ESTAVA FALTANDO: TROCAR FRENTE/COSTAS AO CLICAR
    let containersImagem = document.querySelectorAll(".imagem-container");
    
    containersImagem.forEach(container => {
        let imagens = container.querySelectorAll("img");
        
        // Só aplica o efeito se tiver as duas fotos (frente e costas)
        if (imagens.length >= 2) {
            // Esconde a segunda imagem (costas) logo de cara
            imagens[1].style.display = "none";
            
            // Quando clicar na foto, ele inverte qual aparece
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
