//swap two variables in JavaScript

// a = 10, b = 20
// a = 20, b = 10
//Method 1 using temporary variable

let a = 10;
let b = 20;
let temp = a; // store value of a in temp
a = b; // assign value of b to a 
b = temp; // assign value of temp to b
console.log('After swap using temp variable: a =', a, ', b =', b); // a = 20, b = 10

//Method 2 using array destructuring
let c = 10, d = 20;

[c, d] = [d, c]; // swap using array destructuring
console.log('After swap using array destructuring: c =', c, ', d =', d); // c = 20, d = 10

//Method 3 using arithmetic operations
let e = 10, f = 20;
e = e + f; // e becomes 30
f = e - f; // f becomes 10 (30 - 20)
e = e - f; // e becomes 20 (30 - 10)    
console.log('After swap using arithmetic operations: e =', e, ', f =', f); // e = 20, f = 10    
