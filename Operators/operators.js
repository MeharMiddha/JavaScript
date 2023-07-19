// Arithmetic Operators
const x=2;
const y=4;

let result =x+y;
console.log(result); // 6 is the result

result =x*y;
console.log(result); // 8 is the result

result =y-x;
console.log(result); // 2 is the result

result =y/x;
console.log(result); // 2 is the result

result =y%x;
console.log(result); // 0 is the result

let a=3;
let b=3;
a++;
console.log(a); // 4 is the answer
b--;
console.log(b); // 2 is the answer

let c=3;
let d=2;
console.log(c**d); // 9 is the answer


// Assignment Operators

// = assignment operator is used to assign the values into an variable
let first=3;
let second=0;
second +=first;
// second = second +first // 3+0
console.log(second); // answer is 3

let third=5;
third -= first;
// third=third-first // 5-3
console.log(third); // answer is 2

let fourth= 4;
fourth*=first;
// fourth=fourth*first // 4*3
console.log(fourth); // 12 is the answer

let fifth = 6;
fifth/=first;
// fifth = fifth / first // 6/3
console.log(fifth); // 2 is the answer

let sixth=7;
sixth%=first;
// sixth = sixth %first //7%3
console.log(sixth); // 1 is the answer


let seventh=2;
seventh**=first;
// seventh=seventh**first; //2**3
console.log(seventh); // 8


// comparison Operators

let firstNumber=3;
let secondNumber=4;

let comparison = firstNumber ==secondNumber; // 3==4
console.log(comparison); // false

comparison = firstNumber != secondNumber; // 3!=4
console.log(comparison); // true

let thirdNumber='3';
comparison= firstNumber== thirdNumber; // 3=='3'
console.log(comparison); // true

comparison= firstNumber===thirdNumber; // 3==='3'
console.log(comparison); // false // as the type of vale is not same one is number and another is string


comparison=firstNumber!==thirdNumber; // 3!=='3'
console.log(comparison); // true // as the type is not equal then the answer is true as we have applied !

// GREATER THAN
comparison = firstNumber>secondNumber; // 3> 4
console.log(comparison); // false

// GREATER THAN EQUAL TO
comparison = firstNumber>=secondNumber; // 3>=4
console.log(comparison); // false

// LESS THAN
comparison = firstNumber<secondNumber; // 3<4
console.log(comparison); // true

// LESS THAN EQUAL TO
comparison = firstNumber<=secondNumber; // 3<=4;
console.log(comparison); // true


// logical Operator

let final = true;
let final2=false;

// LOGICAL AND
let comparisonFinal= final && final2; // true && false
console.log(comparisonFinal); // false

// LOGICAL OR
comparisonFinal= final || final2; // true or false
console.log(comparisonFinal); // true

// LOGICAL NOT
comparisonFinal= !final; // not true
console.log(comparisonFinal); // false
