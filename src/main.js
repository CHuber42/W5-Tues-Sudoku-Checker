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