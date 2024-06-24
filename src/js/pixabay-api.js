import axios from 'axios';

const API_KEY = '44433569-eda6d7623baf54ab2611b04f8'; // Замените на свой ключ API Pixabay
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page,
        per_page: 15, // Количество изображений на страницу
        image_type:'photo',
        orientation:'horizontal',
        safesearch:'true',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
}




export function fetchImages2(query) {
  const url = `https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не вдалося отримати дані від Pixabay API');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Не знайдено зображень!',
          message: 'На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!',
        });
        throw new Error('Не знайдено зображень'); 
      }
      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Помилка!',
        message: error.message,
      });
      throw error; 
    });
}