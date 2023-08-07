import GameSavingLoader from './js/GameSavingLoader.js';

GameSavingLoader.load()
  .then((data) => {
    console.log('Данные загружены:', data);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });
