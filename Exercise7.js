// Write the function sortByAge(users) that gets an array of the objects with the age age property and sorts them by age.

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

let tom =   { name: "Tom", age: 25};
let andy =  { name: "Andy", age: 30};
let steve = { name: "Steve", age: 28};

let users = [ tom, andy, steve];

sortByAge(users);

//Sorted by age: [25, 28, 30]
console.log(users[0].age);
console.log(users[1].age);
console.log(users[2].age);