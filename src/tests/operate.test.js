import operate from '../logic/operate';

describe('Operations', () => {
  test('Sum -> 1 + 1 = 2', () => {
    const a = 1;
    const b = 1;
    const operation = operate(a, b, '+');
    expect(operation).toBe('2');
  });

  test('Subtraction -> 7 - 1 = 6', () => {
    const a = 7;
    const b = 1;
    const operation = operate(a, b, '-');
    expect(operation).toBe('6');
  });

  test('Multiplication -> 6 x 7 = 42', () => {
    const a = 6;
    const b = 7;
    const operation = operate(a, b, 'x');
    expect(operation).toBe('42');
  });

  test('Division -> 9 ÷ 3 = 3', () => {
    const a = 9;
    const b = 3;
    const operation = operate(a, b, '÷');
    expect(operation).toBe('3');
  });
});
