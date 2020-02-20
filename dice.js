const diceCount = 4;

let rollDices = function (dices) {
  if (dices < 1) {
    throw new Error('[Dice.rollDices]: at least one dice has to be thrown!');
  }
  let numbers = new Uint32Array(dices);
  window.crypto.getRandomValues(numbers);

  let array = Array.from(numbers);
  return dicesToKey(array);
}

function truncate(n) {
  if (n > 6) {
    return n % 6 + 1;
  } else {
    return n;
  }
}

function dicesToKey(numbers) {
  let array = numbers.map(n => truncate(n));
  if (array.length > diceCount) {
    array.length = 4;
  }
  let key = array.join('');
  return key;
}

export default rollDices;