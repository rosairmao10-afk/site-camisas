// 1. ABRE/FECHA A ABA DE FILTROS (Com proteção de erro)
function toggleFiltros() {
    let aba = document.getElementById("abaFiltros");
    if (!aba) return; // Proteção: se não achar a aba, ignora
    
    // Alterna o display entre flex (abre) e none (fecha)
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
        // Se clicar em 'todos', mostra. Caso contrário, filtra pela classe.
        if (categoria === "todos" || card.classList.contains(categoria)) {
            card.style.display = ""; // Volta ao normal do CSS
        } else {
            card.style.display = "none"; // Esconde
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
        // Se o texto digitado estiver no card, ele aparece
        if (conteudo.includes(entrada)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// 4. LÓGICA AUTOMÁTICA AO CARREGAR O SITE
document.addEventListener("DOMContentLoaded", function() {
    
    //atalho: pesquisa no Enter
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") pesquisarCamisa();
        });
    }

    // Gerenciamento Automático de Etiquetas
    let cards = document.querySelectorAll(".card, .camisa");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        /* ETIQUETA LANÇAMENTO (Se tiver '26/27' no texto) */
        if (texto.includes("26/27")) {
            // Só adiciona se já não tiver uma etiqueta lá dentro
            if (!card.querySelector('.etiqueta-lancamento')) {
                let tagL = document.createElement("div");
                tagL.classList.add("etiqueta-lancamento");
                tagL.innerText = "LANÇAMENTO";
                card.appendChild(tagL);
            }
        }

        /* ETIQUETA MAIS VENDIDA (Sua lógica de times populares) */
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
        
        // Só aplica o efeito se o container tiver as duas fotos (frente e costas)
        if (imagens.length >= 2) {
            // Esconde a segunda imagem (costas) logo de cara
            imagens[1].style.display = "none";
            
            // Quando clicar no container da foto, ele alterna
            container.addEventListener("click", function() {
                if (imagens[0].style.display === "none") {
                    // Mostra a frente, esconde as costas
                    imagens[0].style.display = "block";
                    imagens[1].style.display = "none";
                } else {
                    // Esconde a frente, mostra as costas
                    imagens[0].style.display = "none";
                    imagens[1].style.display = "block";
                }
            });
        }
    });
});
