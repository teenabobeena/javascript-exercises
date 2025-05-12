const convertToCelsius = function(f) {
  const decimal = 5 / 9;
  let firstStep = f - 32;

  let resultC = firstStep * decimal;
  return parseFloat(resultC.toFixed(1));

};

const convertToFahrenheit = function(c) {
  let resultF = c * 1.8 + 32;

  return parseFloat(resultF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
