console.log(5 == '5');   // true  (type coerced)
console.log(5 === '5');  // false (type mismatch)
// --------------------------------------------//
let a = { name: "123" };
let b = { name: "123" };

console.log(a); // prints: { name: "123" }
console.log(b); // prints: { name: "123" }
console.log(a == b);  // false
console.log(a === b); // false

// --------------------------------------------//
const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
console.log(obj1 === obj2); //  true


// --------------------------------------------//
let x = [1,2,3,4]; 
let y = x;
console.log(x);// [1, 2, 3, 4]
console.log(y);// [1, 2, 3, 4]

// --------------------------------------------//
let p = [1, 2, 3, 4];
let q = [...p];     // spread operator creates a shallow copy
q[1] = 8;

console.log(p); // [1, 2, 3, 4] original unchanged
console.log(q); // [1, 8, 3, 4] only the copy changed

// --------------------------------------------//
let original = [[1], [2], [3]];
let copied = [...original];

copied[0][0] = 9;

console.log(original); // [[9], [2], [3]]
console.log(copied);   // [[9], [2], [3]]

// --------------------------------------------//
function testVarLetConst() {
  if (true) {
    var a = 10;       // function-scoped
    let b = 20;       // block-scoped
    const c = 30;     // block-scoped
  }

  console.log("a:", a); //  10
  console.log("b:", b); //  ReferenceError
  console.log("c:", c); //  ReferenceError
}

