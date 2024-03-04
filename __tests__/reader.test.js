import read from '../src/reader';

describe('read function', () => {
  test('should return a promise that resolves with an ArrayBuffer', async () => {
    const result = await read();
    expect(result).toBeInstanceOf(ArrayBuffer);

    // Проверяем, что длина ArrayBuffer соответствует ожидаемой
    const expectedString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const expectedLength = expectedString.length * 2; // Учитываем, что используется Uint16Array
    expect(result.byteLength).toBe(expectedLength);

    // Дополнительно можно проверить содержимое ArrayBuffer
    const bufferView = new Uint16Array(result);
    const decodedString = String.fromCharCode.apply(null, bufferView);
    expect(decodedString).toBe(expectedString);
  });
});
