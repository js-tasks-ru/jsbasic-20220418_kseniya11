function getMinMax(str) {
  let numbers = str.split(' ')
    //.filter(item => !isNan(typeof item === 'number'));
    .filter(number => Number(number));

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}
