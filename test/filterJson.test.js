const { filterJson } = require('../dist/index.cjs')

test('filterJson', () => {
  const json = {
    name: 'sy',
    age: 18,
    hobby: 'coding',
  }
  const keys = ['name', 'age']
  expect(filterJson(json, keys)).toStrictEqual({
    age: 18,
    name: "sy"
  });
});