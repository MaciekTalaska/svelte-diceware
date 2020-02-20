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

  let diceCount = 0;
  list.forEach(line => {
    let [k, v] = line.split(/\s+/);
    if (diceCount == 0) {
      diceCount = k.length;
      console.log('k lenghth', diceCount);
    }

    map.set(k, v);
  });
  return {
    diceCount: diceCount,
    words: map
  };
  //console.log('length of words: ', map.size);
  //return map;
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