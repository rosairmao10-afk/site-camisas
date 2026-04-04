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

// 2. FILTRA LIGAS (Ignora promoções)
function filtrarCategoria(categoria) {
    let cards = document.querySelectorAll(".card:not(.promocao)");
    cards.forEach(card => {
        if (categoria === "todos" || card.classList.contains(categoria)) {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    });
}

// 3. BARRA DE PESQUISA POR TEXTO (Ignora promoções)
function pesquisarCamisa() {
    let campo = document.getElementById("campoPesquisa");
    if (!campo) return; 

    let entrada = campo.value.toLowerCase();
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

// ==========================================
// 4. SISTEMA DE FAVORITOS (LOCAL STORAGE)
// ==========================================
let favoritos = JSON.parse(localStorage.getItem('fav_903')) || [];

function alternarFavorito(botao) {
    // Pega o nome da camisa que está guardado no HTML
    let nomeCamisa = botao.getAttribute("data-nome");

    if (favoritos.includes(nomeCamisa)) {
        // Remove
        favoritos = favoritos.filter(item => item !== nomeCamisa);
        botao.classList.remove('ativo');
    } else {
        // Adiciona
        favoritos.push(nomeCamisa);
        botao.classList.add('ativo');
    }
    // Salva na memória do navegador
    localStorage.setItem('fav_903', JSON.stringify(favoritos));
    atualizarContador();
}

function atualizarContador() {
    let contador = document.getElementById('contador-fav');
    if(contador) contador.innerText = favoritos.length;
}

function abrirModalFavoritos() {
    const lista = document.getElementById('lista-favoritos');
    if (favoritos.length === 0) {
        lista.innerHTML = "<p>Sua vitrine está vazia. Marque suas favoritas com o coração!</p>";
    } else {
        lista.innerHTML = favoritos.map(item => `<p style="border-bottom: 1px solid #eee; padding-bottom: 5px;">✅ ${item}</p>`).join('');
    }
    document.getElementById('modal-favoritos').style.display = "block";
}

function fecharModalFavoritos() {
    document.getElementById('modal-favoritos').style.display = "none";
}

function enviarFavoritosWhats() {
    if (favoritos.length === 0) {
        alert("Você precisa adicionar camisas na vitrine primeiro!");
        return;
    }
    let mensagem = "Olá! Gostei dessas camisas da vitrine 90+3:\n\n" + favoritos.map(f => "- " + f).join('\n') + "\n\nGostaria de consultar a disponibilidade!";
    window.open(`https://wa.me/5515991617508?text=${encodeURIComponent(mensagem)}`, '_blank');
}

// ==========================================
// 5. LÓGICA AUTOMÁTICA AO CARREGAR O SITE
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 5.1 Carrega os corações que já estavam marcados antes de fechar o site
    atualizarContador();
    document.querySelectorAll('.btn-fav').forEach(botao => {
        let nomeCamisa = botao.getAttribute("data-nome");
        if (favoritos.includes(nomeCamisa)) {
            botao.classList.add('ativo');
        }
    });

    // 5.2 Lazy Load (Performance)
    let todasAsImagens = document.querySelectorAll("img");
    todasAsImagens.forEach(img => {
        if (!img.getAttribute("loading")) {
            img.setAttribute("loading", "lazy");
        }
    });

    // 5.3 Atalho: pesquisa no Enter
    let campo = document.getElementById("campoPesquisa");
    if(campo) {
        campo.addEventListener("keypress", function(event) {
            if (event.key === "Enter") pesquisarCamisa();
        });
    }

    // 5.4 Etiquetas Automáticas
    let cards = document.querySelectorAll(".card:not(.promocao)");
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

    // 5.5 Efeito de Girar a Foto
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
