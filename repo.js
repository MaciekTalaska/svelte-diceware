//var dicewareListUrl = require('./en.txt');
//import dicewareListUrl = 

//import words from './en.txt';
//import txt from './en.txt';

let WordsRepository = class  {
  static getWords(data) {
    let list = Array.from(data.split(/\n/));
    let map = new Map();

    list.forEach(line => {
      let [k, v] = line.split(/\t/);
      map.set(k, v);
    });
    return map;
};


  static loadWordsList(dicewareListUrl) {
    return new Promise((resolve, reject) => {
      fetch(dicewareListUrl)
        .then(res => res.text())
        .then(data => {
          let list = Array.from(data.split(/\n/));
          let map = new Map();

          list.forEach(line => {
            let [k, v] = line.split(/\t/);
            map.set(k, v);
          });
          resolve(map);
        });
    });
  }
}

export default WordsRepository;
