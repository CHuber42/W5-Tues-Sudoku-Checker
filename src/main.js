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

// export let aSudokuBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8,
//                           9, 10, 11, 12, 13, 14, 15, 16, 17, 
//                           18, 4, 5, 6, 7, 8, 9, 1, 2, 
//                           27, 5, 6, 7, 8, 9, 1, 2, 3,
//                           36, 6 ,7, 8, 9, 1, 2, 3, 4,
//                           45, 7, 8, 9, 1, 2, 3, 4, 5,
//                           54, 8, 9, 1, 2, 3, 4, 5, 6,
//                           63, 9, 1, 2, 3, 4, 5, 6, 7,
//                           72, 1, 2, 3, 4, 5, 6, 7, 8];

// export let aSudokuBoard = [[1,1], [2,1], 3, 4, 5, 6, 7, 8, 9,
//                            [1,2], 3, 4, 5, 6, 7, 8, 9, 1, 
//                            [1,3], 4, 5, 6, 7, 8, 9, 1, 2, 
//                            4, 5, 6, 7, 8, 9, 1, 2, 3,
//                            5, 6 ,7, 8, 9, 1, 2, 3, 4,
//                            6, 7, 8, 9, 1, 2, 3, 4, 5,
//                            7, 8, 9, 1, 2, 3, 4, 5, 6,
//                            8, 9, 1, 2, 3, 4, 5, 6, 7,
//                            9, 1, 2, 3, 4, 5, 6, 7, 8];
 
export let valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function resetValuesArray() {
  valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export function checkFirstRow() {
  resetValuesArray();
  for (let i = 0; i < 82; i++){    
    if (i%9 == 0 && i > 0) {
      if (valuesArray.length > 0) {
        console.log(i)
        return "Illegal!";
      }
      else if (valuesArray.length == 0) {
        return "Legal!"
      }
      else {
        resetValuesArray();
      }
    }
                                          // i = 9
    let checking_num = aSudokuBoard[i];     // checking_num = 9
    loopInner:
    for (let j = 0; j < 9; j++) {           // j = 0
      if (valuesArray[j] == checking_num) { // if (9 == 9) // TRUE! DO IF CONDITION
        valuesArray.splice(j, 1);           // ValuesArray = []
        break loopInner;
      }
    }
  }
}

export function checkFirstColumn() {
  resetValuesArray();
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