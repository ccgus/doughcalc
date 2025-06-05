const fs = require('fs');
const { loadJsonFromFile } = require('../loadJsonFromFile');

describe('loadJsonFromFile', () => {
  const ingredients = JSON.parse(fs.readFileSync('ingredients.json', 'utf8'));

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(ingredients)
    }));
  });

  test('parses JSON from fetch', async () => {
    const data = await loadJsonFromFile('ingredients.json');
    expect(data).toEqual(ingredients);
    expect(fetch).toHaveBeenCalledWith('ingredients.json');
  });
});
