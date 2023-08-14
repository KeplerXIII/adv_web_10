import GameSaving from './GameSaving.js';
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => new GameSaving(data))
      .catch((error) => {
        throw new Error(`Ошибка при загрузке данных: ${error}`);
      });
  }
}
