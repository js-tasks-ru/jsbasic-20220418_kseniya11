function makeDiagonalRed(table) {
  for (let k = 0; k < table.rows.length; k++) {
    let row = table.rows[k];
    row.cells[k].style.backgroundColor = 'red';
  }
}
