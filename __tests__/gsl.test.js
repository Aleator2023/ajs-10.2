jest.mock('../src/reader', () => ({
    default: jest.fn().mockResolvedValue('mocked data'),
  }));
  
  jest.mock('../src/parser', () => ({
    default: jest.fn().mockResolvedValue('{"id": 9, "created": 1546300800, "userInfo": {"id": 1, "name": "Hitman", "level": 10, "points": 2000}}'),
  }));
  

const GameSavingLoader = require('../src/gsl').default;
const read = require('../src/reader').default;
const json = require('../src/parser').default;

describe('GameSavingLoader', () => {
  test('load method should return a GameSaving object', async () => {
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000
      }
    };

    await expect(GameSavingLoader.load()).resolves.toEqual(expected);

    expect(read).toHaveBeenCalled();
    expect(json).toHaveBeenCalledWith('mocked data');
  });

  test('load method should handle errors', async () => {
    const errorMessage = 'Error loading game saving';
    read.mockRejectedValueOnce(new Error(errorMessage));

    await expect(GameSavingLoader.load()).rejects.toThrow(errorMessage);
  });
});
