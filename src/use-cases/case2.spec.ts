import { setData, getData, clearData, isFound } from './case2';

describe('Jest - beforeEach/afterEach', () => {
  beforeEach(() => {
    setData('Bangkok');
    setData('Samutprakarn');
    setData('Chiangmai');
  });

  afterEach(() => {
    clearData();
  });

  test('clearData() - database has zero', () => {
    clearData();
    const data = getData();
    expect(data.length).toBe(0);
  });

  test('isFound() - database has Bangkok', () => {
    expect(isFound('Bangkok')).toBe(true);
  });

  test('isFound() - database has Samutprakarn', () => {
    expect(isFound('Samutprakarn')).toBe(true);
  });
  test('isFound() - database has not Bangna', () => {
    expect(isFound('Bangna')).toBe(false);
  });

  test('getData() - database has Bangkok', () => {
    const data = getData();
    expect(data).toContain('Bangkok');
  });

  test('setData() - database has Bangkok', () => {
    setData('Phuket');
    const data = getData();
    expect(data).toContain('Phuket');
  });
});

// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  // beforeAll(() => console.log('2 - beforeAll'));
  // afterAll(() => console.log('2 - afterAll'));
  // beforeEach(() => console.log('2 - beforeEach'));
  // afterEach(() => console.log('2 - afterEach'));
  // test('1', () => console.log('2 - test1'));
  // test('2', () => console.log('2 - test2'));
  // test('3', () => console.log('2 - test3'));
});

// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(false);
// });

test('this test will not run', () => {
  expect('A').toBe('A');
});
