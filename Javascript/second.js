// const removeVocals = (string) => {
//   let vocals = ['a', 'e', 'i', 'o', 'u'];
//   let result = [];

//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
//     for (let j = 0; j < vocals.length; j++) {
//       if (string[i] != vocals[j]) {
//         result.push(string[i]);
//       }
//     }
//   }
//   return result;
// };

// removeVocals('origin');

const removeVocals = (string) => {
  return string.replace(/[aeiou]/gi, '');
};

console.log(removeVocals('origin'));

const replaceVocals = (string) => {
  return string.replace(/[aeiou]/gi, '1');
};

console.log(replaceVocals('origin'));

// MAL
const toTen = (from) => {
  let result = [];
  for (from; from <= 10; from++) {
    result.push(from);
  }
  return result;
};

console.log(toTen(2));

const changeType = (array) => {
  let result = [];
  for (const item of array) {
    if (typeof item != 'number') {
      result.push(parseInt(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

let array = [10, '20', 30, '40', 50];

console.log(changeType(array));

// ESTO ESTA MAL
const removeRepeated = (array) => {
  let result = [];
  array.filter((x) => {
    if (!result.includes(x)) {
      result.push(x);
    }
  });
  return result;
};

let arrayTwo = [2, 4, 7, 1, 2, 0, 'foo', 7, 'bar', 'qux', 3, 'foo'];
console.log(removeRepeated(arrayTwo));

const countOdds = (array) => {
  let count = 0;
  for (const item of array) {
    if (item % 2 != 0) {
      count++;
    }
  }
  return count;
};

console.log(countOdds([1, 3, 4, 2, 6, 7, 9, 1, 8]));

const stringToArray = (string) => {
  // let replacing = string.replace(/ /g, '-');
  let splited = string.split(' ');
  let joined = splited.join('');
  return joined;
};

console.log(stringToArray('hola mundo desde javascript'));
