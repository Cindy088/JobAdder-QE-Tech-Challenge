const { sumOfDigits } = require('./index');

describe('Sum of digits', () => {
  it('should return sum of digits', () => {
    const result = sumOfDigits(12345);

    expect(result).toBe(15);
  });

  it('should return sum of digits for 0', () => {
    const result = sumOfDigits(0);

    expect(result).toBe(0);
  });
});
