function filterRange(arr, a, b) {
  return arr.filter(item => {
      return (item <= b &&
        item >= a);
    }
  );
}
