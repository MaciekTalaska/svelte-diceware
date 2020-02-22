let getWordsMap = function(language) {
  let url = location.href + "diceware-" + language + ".txt";
  return loadWordsList(url).then(data => data);
}

// returns an object containing:
//   diceCount: number of dices to throw
//   words: map (k,v) of (index, word)
function getWordsMapFromString(data) {
  let list = Array.from(data.split(/\n/));
  let map = new Map();
  let newList = null;

  console.log('dictionary length: ', list.length);

  let diceCount = 0;
  list.forEach((line, index) => {
    let [k, v] = line.split(/\s+/);
    if (diceCount == 0) {
      diceCount = k.length;
      let size = list.length;
      newList = new Array(size);
      console.log('k: ', k);
      console.log('v: ', v);
    }
    if (v) {
      newList[index] = v;
    } else {
      newList[index] = k;
    }

    map.set(k, v);

  });
  console.log('list of words: ', newList);
  return {
    diceCount: diceCount,
    words: newList, //map,
    size: list.length
  };
}

function loadWordsList(url) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-type', 'text/plain; charset=UTF-8');
    fetch(url, headers)
      .then(res => res.text())
      .then(data => {
        let map = getWordsMapFromString(data);
        resolve(map);
      })
  });
}

export default getWordsMap;