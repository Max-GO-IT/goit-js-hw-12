export function renderImages(images) {
  const gallery = document.querySelector('#gallery');
  const markup = images.hits.map(image => `
    <div class="photo-card">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>${image.likes}</b> likes
        </p>
        <p class="info-item">
          <b>${image.views}</b> views
        </p>
        <p class="info-item">
          <b>${image.comments}</b> comments
        </p>
        <p class="info-item">
          <b>${image.downloads}</b> downloads
        </p>
      </div>
    </div>
  `).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}