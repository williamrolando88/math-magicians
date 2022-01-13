import calculate from '../logic/calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculate testing', () => {
  test('should add number to obj', () => {
    expect(calculate(obj, '2')).toEqual({
      total: null,
      next: '2',
    });
  });

  test('should add operation key', () => {
    const tempObj = calculate(obj, '2');
    expect(calculate(tempObj, '+')).toEqual({
      total: '2',
      next: null,
      operation: '+',
    });
  });

  test('should add second number', () => {
    let tempObj = calculate(obj, '2');
    tempObj = calculate(tempObj, '+');
    expect(calculate(tempObj, '3')).toEqual({
      total: '2',
      next: '3',
      operation: '+',
    });
  });

  test('should return calculate value', () => {
    let tempObj = calculate(obj, '2');
    tempObj = calculate(tempObj, '+');
    tempObj = calculate(tempObj, '3');
    expect(calculate(tempObj, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
});
