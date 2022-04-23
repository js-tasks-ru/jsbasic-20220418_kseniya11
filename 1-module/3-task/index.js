function ucFirst(str) {
  if (str.length > 1) {
    return str[0].toUpperCase() + str.substr(1, str.length);
  }
  else {
    return str.toUpperCase();
  }
}
