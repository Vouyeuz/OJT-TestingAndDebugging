/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import data from '../../data/courses.json';

const numItems = data.length;

describe('Number tests:', () => {
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greater or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe('String tests:', () => {
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays and Objects
const data2 = ['React Native', 'React'];

describe('Arrays and Objects tests:', () => {
  test('The list of course contains React Native and React', () => {
    expect(['React Native', 'React', 'Meteorjs']).toEqual(
      expect.arrayContaining(data2),
    );
  });

  test('The first course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a property title and value of 31.266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});

// !https://jestjs.io/docs/en/expect => list of expect.methods
