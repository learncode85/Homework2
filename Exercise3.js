//Exercise 3: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher than or equal to a and less than or equal to b and return a result as an array

function filterRange(arr, a, b) {
  
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
