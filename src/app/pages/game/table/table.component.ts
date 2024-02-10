import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',

  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  currentPlayer: 'X' | 'O' = 'X';
  table: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  winner: string | null = null;

  restartGame(): void {
    this.table = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.winner = null;
    this.currentPlayer = 'X';
  }


  makeMove(row: number, col: number): void {
    if (!this.table[row][col] && !this.winner) {
      this.table[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.checkDraw()) {
        this.winner = 'Draw';
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }

    this.makeRandomMove();
  }


  checkDraw(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.table[i][j]) {
          return false; // Se c'è almeno una cella vuota, il gioco non è pareggio
        }
      }
    }

    // Tutte le celle sono occupate e nessuno ha vinto
    return !this.checkWinner();
  }

  checkWinner(): boolean {
    for (let i = 0; i < 3; i++) {
      if (
        this.table[i][0] === this.currentPlayer &&
        this.table[i][1] === this.currentPlayer &&
        this.table[i][2] === this.currentPlayer
      ) {
        return true;
      }
      if (
        this.table[0][i] === this.currentPlayer &&
        this.table[1][i] === this.currentPlayer &&
        this.table[2][i] === this.currentPlayer
      ) {
        return true;
      }
    }
    if (
      this.table[0][0] === this.currentPlayer &&
      this.table[1][1] === this.currentPlayer &&
      this.table[2][2] === this.currentPlayer
    ) {
      return true;
    }
    if (
      this.table[0][2] === this.currentPlayer &&
      this.table[1][1] === this.currentPlayer &&
      this.table[2][0] === this.currentPlayer
    ) {
      return true;
    }
    return false;
  }

  makeRandomMove(): void {
    const emptyCells: { row: number; col: number; }[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.table[i][j]) {
          emptyCells.push({ row: i, col: j });
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      // this.makeMove(randomCell.row, randomCell.col);
      setTimeout(() => {

        if (!this.table[randomCell.row][randomCell.col] && !this.winner) {
          this.table[randomCell.row][randomCell.col] = this.currentPlayer;
          if (this.checkWinner()) {
            this.winner = this.currentPlayer;
          } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
          }
        }
      }, 500);


    }
  }
}








