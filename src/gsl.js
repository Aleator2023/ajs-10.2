const read = require('../src/reader').default;
const json = require('../src/parser').default;

export default class GameSavingLoader {
  static async load() {
    try {
      // Используем функцию read для получения данных
      const data = await read();
      // После успешного чтения передаем данные в функцию json для парсинга
      const jsonData = await json(data);
      // После успешного парсинга преобразуем JSON в объект
      return JSON.parse(jsonData);
    } catch (error) {
      // Обрабатываем возможные ошибки в процессе чтения или парсинга
      console.error("Error loading game saving:", error);
      throw error; // Перебрасываем ошибку дальше
    }
  }
}

// Пример использования
(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log("Game saving loaded:", saving);
  } catch (error) {
    console.error("Failed to load game saving:", error);
  }
})();
