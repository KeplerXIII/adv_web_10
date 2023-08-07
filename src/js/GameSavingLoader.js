import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .catch((error) => {
        throw new Error(`Ошибка при загрузке данных: ${error}`);
      });
  }
}
