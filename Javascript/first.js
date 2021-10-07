// @ts-nocheck

const firstToMay = (word) => {
  let first = word[0];
  let rest = word.slice(1);
  let result = first.toUpperCase() + rest;
  return result;
};

const lastToMay = (word) => {
  let lastLpos = word.length - 1;
  let rest = word[lastLpos].toUpperCase();
  let result = word.slice(0, lastLpos) + rest;
  return result;
};

function inpar(word) {
  if (word.length % 2 === 0) {
    console.log('La cadena es par');
  } else {
    let middlePos = parseInt(word.length / 2);
    let middleLetter = word[middlePos].toUpperCase();
    let first = word.slice(0, middlePos);
    let rest = word.slice(middlePos + 1);
    let result = first + middleLetter + rest;
    return result;
  }
}

function searchForE(array, word) {
  let result;
  array.filter((x) => {
    if (x == word) {
      result = word;
    }
  });
  return result;
}

function clearArray(array) {
  while (array.length > 0) {
    array.pop();
  }
  return array.length;
}

module.exports = {
  firstToMay,
  lastToMay,
  inpar,
  searchForE,
  clearArray,
};
