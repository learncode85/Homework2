// Create the function unique(arr) that should return an array with unique item of arr.

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [ "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];

console.log( unique(strings));// The is [ 'Hare', 'Krishna', ':-0' ]
