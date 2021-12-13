import { veryComplexBusinessLogic, getSpecialId } from './fileMappingService';

describe('veryComplexBusinessLogic', () => {
  test('should return the value of fileId times 2', () => {
    const fileId = 3;
    const actual = veryComplexBusinessLogic(fileId);
    const expected = 6;
    expect(actual).toBe(expected);
  });
});

describe('getSpecialId', () => {
  test('input is in range output should be the right item in the map', () => {
    const doubleId = 2;
    const actual = getSpecialId(doubleId);
    const expected = 'one';
    expect(actual).toBe(expected);
  });

  test('input is out of range output should be undefined', () => {
    const doubleId = 10;
    const actual = getSpecialId(doubleId);
    const expected = undefined;
    expect(actual).toBe(expected);
  });
});
