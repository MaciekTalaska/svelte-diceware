let getWordsMap = function() {
  let url = location.href + "en.txt";
  return loadWordsList(url).then(data => data);
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