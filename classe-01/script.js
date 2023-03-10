const navegacao = document.querySelector("nav");
const iconeMenu = document.querySelector(".menu-list__img-menu");
const textoMenu = document.querySelectorAll(".item-text");
const imagensGaleria = document.querySelectorAll(".gallery-post__image");
const modal = document.querySelector(".modal");
let imagemModal = document.querySelector(".modal__image");
const fecharModal = document.querySelector(".modal__close");
const anterior = document.querySelector(".prev-button");
const proxima = document.querySelector(".next-button");
const likes = document.querySelectorAll(".gallery-post__like");
const likeModal = document.querySelector(".modal .gallery-post__like")
let index = 0;

iconeMenu.addEventListener("click", () => {
    if (iconeMenu.src = "./assets/closed-menu.svg") {
        iconeMenu.src = "./assets/open-menu.svg";
    } else {
        iconeMenu.src = "./assets/closed-menu.svg";
    }
    navegacao.classList.toggle("show-menu");
    textoMenu.forEach(texto => {
        texto.classList.toggle("show-menu");
    })
})

imagensGaleria.forEach((imagem, indexImagem) => {
    imagem.addEventListener("click", (event) => {

        abrirModal(event.target, indexImagem);
    })
});

function abrirModal(imagemGaleria, indexImagem) {
    modal.style.display = "flex";
    imagemModal.src = imagemGaleria.src;
    index = indexImagem;

    atualizarBotao();
}

function updateModalLike() {
    if (likes[index].classList.contains("hide")) {
        likeModal.classList.add("hide")
    } else {
        likeModal.classList.remove("hide")
    }
}

function darLike() {
    imagemModal.addEventListener("dblclick", () => {
        likes[index].classList.toggle("hide")
        updateModalLike()
    })
}

darLike();

//fechar Modal
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
})

//carousel
proxima.addEventListener("click", (event) => {
    event.stopPropagation()
    proximaImagem()
    atualizarBotao()
})

anterior.addEventListener("click", (event) => {
    event.stopPropagation()
    anteriorImagem()
    atualizarBotao()
})

function proximaImagem() {
    index++;
    imagemModal.src = imagensGaleria[index].src;
    updateModalLike()
}

function anteriorImagem() {
    index--;
    imagemModal.src = imagensGaleria[index].src;
    updateModalLike()
}

function atualizarBotao() {
    proxima.classList.remove("hide")
    anterior.classList.remove("hide")
    if (index == imagensGaleria.length - 1) {
        proxima.classList.add("hide")
    } else if (index == 0) {
        anterior.classList.add("hide")
    }
}