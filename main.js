const cells = document.querySelectorAll('.cell');
let turn = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent) return;
    cell.textContent = turn;
    turn = turn === 'X' ? 'O' : 'X';

    // Check for win
    if (checkWin(cells)) {
      alert(`${turn} wins!`);
      resetGame();
    } else if (isDraw(cells)) {
      alert('It\'s a draw!');
      resetGame();
    }
  });
});

function checkWin(cells) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]
}