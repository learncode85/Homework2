// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

function getAverageAge(users) {
  return users.reduce ((prev, user) => prev + user.age, 0) / users.length;
}

let andrew =  { name: "Andrew", age: 30 };
let carol =   { name: "Carol", age: 27};
let dave =    { name: "Dave", age: 33};

let users = [ andrew, carol, dave ];

console.log ( getAverageAge(users)); // After this program, the average age is 30.