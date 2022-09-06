import defaultExport, { forEach, foo, bar } from './case3';

describe('Jest - Mock', () => {
  test('Mock Functions', () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  test('Mock Return values', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
  });

  test('Mock Return values', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter((num) => filterTestFn(num));

    console.log(result);
    // > [11]
    expect(filterTestFn.mock.calls[0][0]).toBe(11);
    expect(filterTestFn.mock.calls[1][0]).toBe(12);
  });
});

jest.mock('./case3', () => {
  const originalModule = jest.requireActual('./case3');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

describe('Jest - Mock require', () => {
  test('should do a partial mock', () => {
    const defaultExportResult = defaultExport();
    console.log(defaultExportResult);
    expect(defaultExportResult).toBe('mocked baz');
    expect(defaultExport).toHaveBeenCalled();

    expect(foo).toBe('mocked foo');
    expect(bar()).toBe('bar');
  });
});
