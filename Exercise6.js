//Exercise 6: Write the code to create another array from it, of object with id and fullName, where fullNmae is generated from name and surname

let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = { name: "Mary", surname: "Key", id: 3};


let users = [john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name}  ${user.surname}`,
  id: user.id

}));

console.log( usersMapped[0].fullName);
console.log( usersMapped [1].fullName);
console.log( usersMapped[2].fullName);
