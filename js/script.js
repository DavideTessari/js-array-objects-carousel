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

// Array degli oggetti immagine
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Vivi la crescita di Miles Morales, che acquisisce incredibili e nuovi poteri esplosivi per diventare il nuovo Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Esplora dimensioni diverse con Ratchet e Clank mentre affrontano un malvagio imperatore proveniente da un\'altra realtà.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Raccogli tutti i tuoi amici e tuffati nell'epico Fortnite di Epic Games, uno scontro tra 100 giocatori che unisce saccheggi, crafting, sparatorie e caos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Perso, ferito e solo, un gatto randagio deve dipanare un antico mistero per fuggire da una città dimenticata da tempo.',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers è un epico gioco di azione e avventura in terza persona che unisce una storia originale e cinematografica a modalità single-player e co-op."
    }
];

let activeItem = 0;

// Selezionamento dei contenitori per le immagini e le miniature
const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

// Creazione dinamica degli elementi HTML per le immagini e le miniature
images.forEach((image, index) => {
    // Creazione dell'elemento immagine
    const newImage = document.createElement('div');
    newImage.classList.add('image');
    if (index === activeItem) newImage.classList.add('active');
    newImage.innerHTML = `<img src="${image.image}" alt="">`;
    imagesContainer.appendChild(newImage);

    // Creazione dell'elemento miniature
    const newThumbnail = document.createElement('div');
    newThumbnail.classList.add('thumbnail');
    if (index === activeItem) newThumbnail.classList.add('active');
    newThumbnail.innerHTML = `<img src="${image.image}" alt="">`;
    thumbnailsContainer.appendChild(newThumbnail);
});

// Selezionamento di tutte le immagini e miniature
const allImages = document.querySelectorAll('.image');
const allThumbnails = document.querySelectorAll('.thumbnail');

// Selezione dell'elemento titolo e del paragrafo
const titleElement = document.querySelector('.info-container h2');
const textElement = document.querySelector('.info-container p');

// Aggiunta di eventi per le frecce di navigazione
document.querySelector('.arrow.next').addEventListener('click', function() {
    navigateCarousel(1); // Naviga avanti
});

document.querySelector('.arrow.previous').addEventListener('click', function() {
    navigateCarousel(-1); // Naviga indietro
});

// Funzione per navigare nel carosello
function navigateCarousel(direction) {
    allImages[activeItem].classList.remove('active');
    allThumbnails[activeItem].classList.remove('active');
    // Calcola il nuovo indice dell'elemento attivo
    activeItem = (activeItem + direction + images.length) % images.length;
    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
    
    // Aggiorna il titolo e il testo in basso a destra
    titleElement.textContent = images[activeItem].title;
    textElement.textContent = images[activeItem].text;
}

