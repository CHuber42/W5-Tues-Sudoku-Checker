import {aSudokuBoard, valuesArray, checkFirstRow, checkFirstColumn} from './../src/main.js'


describe ('aSudokuBoard', () => {
  let testArray = [];
 
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  })

  test('Should check if valuesArray is correct', () => {
    for (let i = 0; i < 9; i++) {
      expect(testArray[i]).toEqual(valuesArray[i]);
    }  
  })

  test('Should check if board loaded', () => {
    expect(aSudokuBoard.length).toEqual(81);
  })
  
  test('Should reduce valuesArray to empty by finding elements in first row and removing them', () => {
    checkFirstRow();
    expect(valuesArray.length).toEqual(0);
  })



  test('Should reduce valuesArray to empty by finding elements in first column and removing them', () => {
    checkFirstColumn();
    expect(valuesArray.length).toEqual(0);
  })
  
})