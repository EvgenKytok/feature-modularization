import { fetchImages } from './api.js';
import {
    addImages,
    clearGallery,
    removeLast,
    reverseGallery,
    shuffleGallery
} from './gallery.js';

const loadMoreBtn = document.getElementById('loadMore');
const clearGalleryBtn = document.getElementById('clearGallery');
const removeLastBtn = document.getElementById('removeLast');
const reverseGalleryBtn = document.getElementById('reverseGallery');
const shuffleGalleryBtn = document.getElementById('shuffleGallery');

let page = 1;

async function loadImages() {
    try {
        const data = await fetchImages(page);
        addImages(data);
        page++;
    } catch (error) {
        console.error('Помилка завантаження:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadImages);

loadMoreBtn.addEventListener('click', loadImages);
clearGalleryBtn.addEventListener('click', clearGallery);
removeLastBtn.addEventListener('click', removeLast);
reverseGalleryBtn.addEventListener('click', reverseGallery);
shuffleGalleryBtn.addEventListener('click', shuffleGallery);
