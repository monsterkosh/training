// @ts-nocheck
const { expect } = require('@jest/globals');
const {
  firstToMay,
  lastToMay,
  inpar,
  searchForE,
  clearArray,
} = require('./first');

let array = ['foo', 'bar', 'baz', 'qux', 'origin'];
let word = 'baz';

// @ts-ignore
test('upper the first letter', () => {
  expect(firstToMay('str')).toBe('Str');
});

// @ts-ignore
test('upper the last letter', () => {
  expect(lastToMay('str')).toBe('stR');
});

// @ts-ignore
test('upper the middle letter', () => {
  expect(inpar('javascripts')).toBe('javasCripts');
});

// @ts-ignore
test('find the element baz', () => {
  expect(searchForE(array, word)).toBe('baz');
});

// @ts-ignore
test('empty array', () => {
  expect(clearArray(array)).toBe(0);
});
