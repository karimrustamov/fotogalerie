const bilderArray = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
];

function load() {
    const container = document.getElementById('allImages');

    for (let i = 0; i < bilderArray.length; i++) {
       container.innerHTML += `
            <div class="imgbox">
                <img onclick="openImage('./img/${bilderArray[i]}')" src="./img/${bilderArray[i]}" alt="img${i+1}">
            </div>
       `;
    }
}

function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';  // Öffnen Sie die Lightbox
    setTimeout(() => {
        lightbox.style.opacity = '1'; // Setzt die Opazität auf 1, um die Lightbox anzuzeigen
        lightboxImg.style.transform = 'scale(1)'; // Setzt die Skalierung des Bildes auf normal
    }, 50);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightbox.style.opacity = '0'; // Setzt die Opazität auf 0, um die Lightbox auszublenden
    lightboxImg.style.transform = 'scale(0.9)'; // Verkleinert das Bild leicht
    
    setTimeout(() => {
        lightbox.style.display = 'none';  // Verstecken Sie die Lightbox nachdem die Animation abgeschlossen ist
    }, 500); // 500ms entsprechen der Dauer der CSS-Transition
}