let getWordsMap = function(language) {
  let url = location.href + "diceware-" + language + ".txt";
  return loadWordsList(url).then(data => data);
}

// returns an object containing:
//   size: number of dices to throw
//   words: list (array) of words
function getWordsListFromString(data) {
  let list = Array.from(data.split(/\n/));
  let newList = null;

  list.forEach((line, index) => {
    let [k, v] = line.split(/\s+/);
    if (newList == null) {
      newList = new Array(list.length);
    }
    newList[index] = (v) ? v : k;
  });
  return {
    words: newList,
    size: list.length
  };
}


// returns an object containing:
//   diceCount: number of dices to throw
//   words: map (k,v) of (index, word)
function getWordsMapFromString(data) {
  let list = Array.from(data.split(/\n/));
  let diceCount = 0;
  let newList;

  list.forEach((line, index) => {
    let [k, v] = line.split(/\s+/);
    if (diceCount == 0) {
      diceCount = k.length;
      newList = new Array(list.length);
    }
    newList[index] = (v) ? v : k;
  });
  return {
    diceCount: diceCount,
    words: newList,
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
        let result = getWordsListFromString(data);
        resolve(result);
      })
  });
}

export default getWordsMap;