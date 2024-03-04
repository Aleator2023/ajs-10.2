import GameSavingLoader from '../src/gsl';

jest.mock('../src/reader', () => ({
    default: jest.fn().mockRejectedValue(new Error('Error reading data')),
  }));
  
  jest.mock('../src/parser', () => ({
    default: jest.fn().mockResolvedValue(/* не используется, если read отклонён */),
  }));
  
  describe('GameSavingLoader', () => {
    test('load should handle errors', async () => {
      await expect(GameSavingLoader.load()).rejects.toThrow('Error reading data');
    });
  });
  
  