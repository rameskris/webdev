//pure fucntion
//in pure function every time you call it with same argument or without arg
//you wil get same result gurentee
//not depend on outside world
function greet(name) {
  return `Hello ${name}`;
}

greet("ramesh");

//Not pure
//name taken from global if somebody sles changes it now different o/p
//
let name = "krish";
function greetAgain() {
  console.log(`Hello ${name}`);
}

greetAgain(); //krish

name = "ram";

greetAgain(); //ram

//side effects
/**
 * what should take in
 * what should our program out
 *
 * avoid side effeects means
 * do nothing but return output
 * based on nothing but input
 * A pure function has two characteristics:

No Side Effects: A pure function has no effect on the program or the world besides outputting its return value
Deterministic: Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters, and not on any other information (e.g. global program state)



getDate = ƒ()
 Pure Not Pure 
🤔 getDate is Not Pure
function getDate() {
  return new Date().toDateString();
}
Explanation
A function is not pure if its output depends on anything except its inputs (including the state of the world), or if calling the function at different times with the same inputs can give different outputs (e.g. if called on different days).
 */

const thesis = {
  name: "chruch's",
  date: 1936,
};

function renameThesis(oldThesis, newName) {
  return {
    name: newName,
    date: oldThesis.date,
  };
}
const thesis2 = renameThesis(thesis, "chruchTueing");

/**
 * iteration=>imperative,looping,stateful(iteration isn't fucntional use recursion insted)
 * recursion=>fucntion,self-referential,stateless(stay out of loop)
 *
 */
//itereation
function sum(numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

sum([0, 1, 2, 3, 4]); //10

//recursive

function sumA(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  } else {
    return numbers[0] + sum(numbers.slice(1)); //4+
  }
}

console.log(sumA([0, 1, 2, 3, 4]));
/*
sum([1,2,3])
-> 1 + sum([2,3])
-> 1 + 2 + sum([3])
-> 1 + 2 + 3 + sum([])
-> 1 + 2 + 3 + 0
-> 6

*/

function iterativeFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * iterativeFactorial(n - 1);
}
