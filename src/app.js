import GameSavingLoader from './js/GameSavingLoader.js';

(async () => {
  try {
    const data = await GameSavingLoader.load();
    console.log('Данные загружены:', data);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error.message);
  }
})();
