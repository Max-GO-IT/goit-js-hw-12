import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('#search-form');
const formButton = document.querySelector('.form-button'); 
const nextButton = document.querySelector('.next-button'); 


const gallery = document.querySelector('#gallery');
const loading = document.querySelector('#loading');
loading.style.display = "none";

let lightbox = null;
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
let searchQueryTemp = '';

function showNoImagesMessage() {
  iziToast.info({
    title: 'Не знайдено зображень!',
    message: 'На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!',
  });
  currentPage = 1;
  nextButton.classList.add('hidden')
}


function handleError(error) {
  loading.style.display = "none";
  if (error.response && error.response.status === 404) {
    showNoImagesMessage();
  } else {
    iziToast.error({
      title: 'Помилка!',
      message: 'Виникла помилка під час отримання даних. Перевірте своє підключення до інтернету або спробуйте пізніше.',
    });
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search-input').value.trim();
 
  
   
   if (searchQuery === '') {
            iziToast.warning({
              title: 'Введіть запит!',
              message: 'Будь ласка, введіть пошуковий запит',
            });
          return;
         }

    gallery.innerHTML = '';
    currentPage = 1;
    searchQueryTemp=searchQuery; 
    nextButton.classList.remove('hidden')
   
 
  console.log(currentPage);
  loading.classList.remove('hidden');
  loading.style.display = "block";

  fetchImages(searchQueryTemp,currentPage)
    .then(images => {
      if (images.hits.length === 0) {
        showNoImagesMessage();
        return; 
      }

      renderImages(images);
      
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-link', {
          captionDelay: 250,
          captionPosition: 'bottom',
          captionType: 'attr',
          captionsData: 'alt',
        });
      } else {
        lightbox.refresh(); 
      }
      
      if(images.totalHits>(currentPage*15))
        {
          nextButton.classList.remove('hidden');
        }
      else
        {
          nextButton.classList.add('hidden');
        } 


    })
    .then(() => {
      loading.style.display = "none";
    })
    .catch(handleError);
});

nextButton.addEventListener('click', (event) => {
  event.preventDefault();
  
    currentPage =currentPage + 1;

 
  console.log(currentPage);
  loading.classList.remove('hidden');
  loading.style.display = "block";

  fetchImages(searchQueryTemp,currentPage)
    .then(images => {
      if (images.hits.length === 0) {
        showNoImagesMessage();
        return; 
      }

      renderImages(images);
      
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-link', {
          captionDelay: 250,
          captionPosition: 'bottom',
          captionType: 'attr',
          captionsData: 'alt',
        });
      } else {
        lightbox.refresh(); 
      }
      
      if(images.totalHits>(currentPage*15))
        {
          nextButton.classList.remove('hidden');
        }
      else
        {
          nextButton.classList.add('hidden');
        }


    })
    .then(() => {
      loading.style.display = "none";
    })
    .catch(handleError);
});



