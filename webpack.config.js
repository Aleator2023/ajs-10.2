const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Точка входа вашего приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к каталогу выходных файлов
  },
};