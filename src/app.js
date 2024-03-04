import  GameSavingLoader  from '../src/gsl';

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
  }, (error) => {
    // ...
  });