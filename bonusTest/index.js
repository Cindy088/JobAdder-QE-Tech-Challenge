function sumOfDigits(number) {
  if (number === 0) {
    return 0;
  }
  return (number % 10) + sumOfDigits(Math.floor(number / 10));
}

module.exports = {
  sumOfDigits,
};
