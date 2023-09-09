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

let currentImageIndex = -1;

function load() {
    const container = document.getElementById('allImages');

    for (let i = 0; i < bilderArray.length; i++) {
        container.innerHTML += `
            <div class="imgbox">
                <img onclick="openImage('./img/${bilderArray[i]}', ${i})" src="./img/${bilderArray[i]}" alt="img${i+1}">
            </div>
        `;
    }
}

function openImage(src, index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex'; 
    currentImageIndex = index; 

    setTimeout(() => {
        lightbox.style.opacity = '1'; 
        lightboxImg.style.transform = 'scale(1)'; 
    }, 50);
}

function switchImage(direction) {
    currentImageIndex = (currentImageIndex + direction + bilderArray.length) % bilderArray.length;
    openImage(`./img/${bilderArray[currentImageIndex]}`, currentImageIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightbox.style.opacity = '0'; 
    lightboxImg.style.transform = 'scale(0.9)'; 

    setTimeout(() => {
        lightbox.style.display = 'none';  
    }, 500); 
}
