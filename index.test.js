// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when str="Hello!" and n=3', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('Hello!');
    mPrompt.mockReturnValueOnce('3');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('Hello!\nHello!\nHello!\n');
    });
  });
  test('when str="" and n=5', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('');
    mPrompt.mockReturnValueOnce('5');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('\n\n\n\n\n');
    });
  });
  test('when str="CIS171" and n=0', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('CIS171');
    mPrompt.mockReturnValueOnce('0');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('');
    });
  });
});
