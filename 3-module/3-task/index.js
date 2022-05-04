function camelize(str) {
  let arr = str.split('-');
  let arr2 = arr.map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  return arr2.join('');
}
