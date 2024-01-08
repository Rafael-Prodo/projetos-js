"use strict";

const imagens = [
    {"id": "1", "url":"./img/palmeiras1.jpg"},
    {"id": "2", "url":"./img/palmeiras2.jpg"},
    {"id": "3", "url":"./img/palmeiras3.jpg"},
    {"id": "4", "url":"./img/palmeiras4.jpg"},
    {"id": "5", "url":"./img/palmeiras5.jpg"},
    {"id": "6", "url":"./img/palmeiras6.jpg"},
]

const containerItems = document.querySelector("#container-items");

const loadImagens = (imagens, container) => {
    imagens.forEach (imagem => {
        container.innerHTML += `
        <div class="item">
            <img src="${imagem.url}">   
        </div>
     `;
    })
}

loadImagens(imagens, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);