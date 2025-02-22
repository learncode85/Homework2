// Write the function shuffle(array) that shuffles its elements randomly. Running this several times should lead to different orders of elements.

function shuffle(array) {
  array.sort( () => Math.random() - 0.5);
}

//The more the program is run, the orders changes as [6, 5, 4, 7], or [ 4, 7, 6, 5], etc
let arr = [4, 5, 6, 7];
shuffle(arr);
console.log(arr);