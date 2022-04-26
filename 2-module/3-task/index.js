let calculator = {
  read(a, b) {
    this.a = +prompt('цифра а', 0);
    this.b = +prompt('цифра b', 0);
    return this.a = a,
      this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
