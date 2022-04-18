function factorial(n) {
  var result = 1;
  var i;
  for (i = 1; i <= n; i++) {
    result = result * i;
  };
  return result;
}
