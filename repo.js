import en from './en.txt';

let getWordsMap = function() {
  return getWordsMapFromString(en);
}

function getWordsMapFromString(data) {
  let list = Array.from(data.split(/\n/));
  let map = new Map();

  list.forEach(line => {
    let [k, v] = line.split(/\t/);
    map.set(k, v);
  });
  return map;
}

let WordsRepository = class  {

  static loadWordsList(dicewareListUrl) {
    return new Promise((resolve, reject) => {
      fetch(dicewareListUrl)
        .then(res => res.text())
        .then(data => {
          let map = getWordsMapFromString(data);
          resolve(map);
        });
    });
  }
}

export default getWordsMap;