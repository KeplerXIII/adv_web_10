import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return await json(data);
    } catch (error) {
      throw new Error(`Ошибка при загрузке данных: ${error}`);
    }
  }
}
