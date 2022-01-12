import calculate from '../logic/calculate';

calculate;
test('should calculate', () => {
  expect(
    calculate({ total: 123, next: 123, operation: '+' }, 'AC'),
  ).toStrictEqual({ total: null, next: null, operation: null });
});
