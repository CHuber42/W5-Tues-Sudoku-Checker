import $ from 'jquery';
import 'bootstrap';
import './styles.css';

// use this for tests
// export let aSudokuBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
//                            2, 3, 4, 5, 6, 7, 8, 9, 1, 
//                            3, 4, 5, 6, 7, 8, 9, 1, 2, 
//                            4, 5, 6, 7, 8, 9, 1, 2, 3,
//                            5, 6 ,7, 8, 9, 1, 2, 3, 4,
//                            6, 7, 8, 9, 1, 2, 3, 4, 5,
//                            7, 8, 9, 1, 2, 3, 4, 5, 6,
//                            8, 9, 1, 2, 3, 4, 5, 6, 7,
//                            9, 1, 2, 3, 4, 5, 6, 7, 8];

let aSudokuBoard = [];

 
export let valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function resetValuesArray() {
  valuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export function checkFirstRow() {
  resetValuesArray();
  for (let i = 0; i < 82; i++){    
    if (i%9 == 0 && i > 0) {
      if (valuesArray.length > 0) {
        return "Illegal!";
      }
      else if (valuesArray.length == 0 && i == 81) {
        return "Legal!";
      }
      else {
        resetValuesArray();
      }
    }                         
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
  for (let column = 0; column < 10; column++){
    if (valuesArray.length > 0 && column > 0) {
      return "Illegal!";
    }
    else if (valuesArray.length == 0 && column == 9) {
      return "Legal!";
    }
    else {
      resetValuesArray();
    }

    for (let i = 0; i < 9; i++){
      let checking_num = aSudokuBoard[(i*9) + column];
      loopInner:
      for (let j = 0; j < 9; j++) {
        if (valuesArray[j] == checking_num) {
          valuesArray.splice(j, 1);
          break loopInner;
        }
      }
    }
  }
}

$("button").click(function(event) {
  event.preventDefault();
  $("input").each(function() {
    aSudokuBoard.push(parseInt($(this).val()));
  });
  let columnLegal = checkFirstColumn();
  let rowLegal = checkFirstRow();
  if ((rowLegal == "Legal!") && (columnLegal == "Legal!")) {
    $("#conclusion").append("Legal!");
  }
  else {
    $("#conclusion").append("Illegal!");
  }
});
  
