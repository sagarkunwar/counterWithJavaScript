// Its map which is usually used to double the value in array
// or even map is used to generate next array from another array
const arr = [5, 3, 4];

//==============================
//putting same code in the parameter given below in the variable result function
// is also known as higher order function
// function double(x) {
//   return x * 2;
// }
const result = arr.map(function double(x) {
  //map take function in it parameter so it can be known as higher order function
  return x * 2;
}); // map takes function to generate another array

console.log(result);

//==================================================================
// changing array into binary by using MAP
const changingToBinary = [1, 2, 3];

const result1 = changingToBinary.map(function binary(x) {
  return x.toString(2);
});

console.log(result1);
//===================================================
console.log("Using filter for odd number");

const arr1 = [0, 5, 9, 6, 1, 2];

function filter(x) {
  return x % 2; // checking odd with '%' modulus
}

const result2 = arr1.filter(filter); // filter also take function as a parameter to filter
console.log(result2);
//================================================
// now filtering the same value which are even

console.log("filtering the even numbers in array");

const arr2 = [0, 6, 8, 5, 75, 8];

function filter1(x) {
  return x % 2 == 0;
}
const result3 = arr2.filter(filter1);

console.log(result3);

// now solving the same thing with arrow function

console.log("now solving the same thing with arrow function");
const arr3 = [0, 6, 8, 5, 75, 8];

const result4 = arr3.filter((x) => x % 2 == 0);
console.log(result4);
//============================================================
console.log("here we are using filter and Map at the sametime ");
const user = [
  { firstName: "Sagar", lastName: "Kunwar", age: 22 },
  { firstName: "Durgesh", lastName: "Thapa", age: 23 },
  { firstName: "Aayush", lastName: "Devkota", age: 26 },
  { firstName: "Ram", lastName: "Balami", age: 34 },
  { firstName: "Hari", lastName: "Rai", age: 45 },
];

const OP = user
  .filter(function a(x) {
    return x.age > 20;
  })
  .map(function b(x) {
    return ["My name is " + x.firstName + " " + x.lastName];
  });

console.log(OP);
