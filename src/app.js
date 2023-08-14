import GameSavingLoader from './js/GameSavingLoader.js';

(async () => {
  try {
    const object = await GameSavingLoader.load();
    console.log('Данные загружены:', object);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error.message);
  }
})();
