
import json from '../src/parser';

describe('json function', () => {
  test('should correctly parse an ArrayBuffer to a string', async () => {
    // Создаем тестовый ArrayBuffer из строки
    const testString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(testString.length * 2); // Умножаем на 2, т.к. используем Uint16Array
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < testString.length; i++) {
      bufferView[i] = testString.charCodeAt(i);
    }

    // Вызываем функцию json и ожидаем завершения промиса
    const result = await json(buffer);

    // Проверяем, что результат соответствует исходной строке
    expect(result).toBe(testString);
  });
});
