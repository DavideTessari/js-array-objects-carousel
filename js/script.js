// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione 
// del markup statico: costruiamo il container e inseriamo l'immagine grande in modo
// da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
// per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva 
// diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva 
// è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve 
// attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca 
// la freccia verso il basso.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts, and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured, and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeItem = 0;

// Selezioniamo i contenitori delle immagini e delle miniature
const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

// Funzione per creare un'immagine con il titolo e il testo
function createImageElement(imageData, index) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    if (index === activeItem) {
        imageElement.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = imageData.image;
    img.alt = imageData.title;

    const title = document.createElement('h2');
    title.textContent = imageData.title;
    title.classList.add('title');

    const text = document.createElement('p');
    text.textContent = imageData.text;
    text.classList.add('text');

    imageElement.appendChild(img);
    imageElement.appendChild(title);
    imageElement.appendChild(text);

    return imageElement;
}

// Funzione per navigare avanti nel carosello
function nextSlide() {
    const currentImage = imagesContainer.querySelector('.image.active');
    const nextIndex = (activeItem + 1) % images.length;
    const nextImage = imagesContainer.children[nextIndex];
    currentImage.classList.remove('active');
    nextImage.classList.add('active');
    activeItem = nextIndex;

    // Aggiorna l'opacità delle miniature
    allThumbnails.forEach((thumbnail, index) => {
        if (index === activeItem) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Funzione per navigare indietro nel carosello
function prevSlide() {
    const currentImage = imagesContainer.querySelector('.image.active');
    const prevIndex = (activeItem - 1 + images.length) % images.length;
    const prevImage = imagesContainer.children[prevIndex];
    currentImage.classList.remove('active');
    prevImage.classList.add('active');
    activeItem = prevIndex;

    // Aggiorna l'opacità delle miniature
    allThumbnails.forEach((thumbnail, index) => {
        if (index === activeItem) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Creiamo gli elementi HTML dinamicamente
images.forEach((imageData, index) => {
    const imageElement = createImageElement(imageData, index);
    const thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('thumbnail');
    if (index === activeItem) {
        thumbnailElement.classList.add('active');
    }

    thumbnailElement.addEventListener('click', () => {
        changeSlide(index);
    });

    imagesContainer.appendChild(imageElement);
    thumbnailsContainer.appendChild(thumbnailElement);

    // Aggiungiamo la miniatura anche nell'elemento miniature
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = imageData.image;
    thumbnailImg.alt = imageData.title;
    thumbnailElement.appendChild(thumbnailImg);
});

// Selezionamento di tutte le miniature
const allThumbnails = document.querySelectorAll('.thumbnail');

// Gestione del click sulla freccia successiva
document.querySelector('.arrow.next').addEventListener('click', nextSlide);

// Gestione del click sulla freccia precedente
document.querySelector('.arrow.previous').addEventListener('click', prevSlide);
