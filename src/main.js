import $ from 'jquery';
import 'bootstrap';
import './styles.css';

export let aSudokuBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                           2, 3, 4, 5, 6, 7, 8, 9, 1, 
                           3, 4, 5, 6, 7, 8, 9, 1, 2, 
                           4, 5, 6, 7, 8, 9, 1, 2, 3,
                           5, 6 ,7, 8, 9, 1, 2, 3, 4,
                           6, 7, 8, 9, 1, 2, 3, 4, 5,
                           7, 8, 9, 1, 2, 3, 4, 5, 6,
                           8, 9, 1, 2, 3, 4, 5, 6, 7,
                           9, 1, 2, 3, 4, 5, 6, 7, 8];
 
export let valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function checkFirstRow() {
  valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++){
    let checking_num = aSudokuBoard[i];
    loopInner:
    for (let j = 0; j < 9; j++) {
      if (valuesArray[j] == checking_num) {
        valuesArray.splice(j, 1);
        break loopInner;
      }
    }
  }
}

export function checkFirstColumn() {
  valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++){
    let checking_num = aSudokuBoard[i*9];
    loopInner:
    for (let j = 0; j < 9; j++) {
      if (valuesArray[j] == checking_num) {
        valuesArray.splice(j, 1);
        break loopInner;
      }
    }
  }
}