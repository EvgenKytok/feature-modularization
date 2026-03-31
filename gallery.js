const gallery = document.getElementById('gallery');

let images = [];

export function displayImages(imgArray) {
    imgArray.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `https://picsum.photos/id/${img.id}/300/200`;
        imgElement.alt = img.author;
        gallery.appendChild(imgElement);
    });
}

export function addImages(newImages) {
    images.push(...newImages);
    displayImages(newImages);
}

export function clearGallery() {
    gallery.innerHTML = '';
    images = [];
}

export function removeLast() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
        images.pop();
    }
}

export function reverseGallery() {
    images.reverse();
    gallery.innerHTML = '';
    displayImages(images);
}

export function shuffleGallery() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    gallery.innerHTML = '';
    displayImages(images);
}
