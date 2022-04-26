function sumSalary(salaries) {
  sum = 0;
  for (let key in salaries) {
    if ((typeof salaries[key] === 'number') && isFinite(salaries[key]))
    {
      sum = sum + salaries[key];
    }
  }
  return sum;
}
