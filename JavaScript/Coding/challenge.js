// array have [1, 2, 3, 4, 5] but need output as [4, 5, 1, 2, 3]
let a = [1, 2, 3, 4, 5];
let rotation = 2;

for (let i = 0; i < rotation; i++) {
  let last = a.pop();     // Remove from end
  a.unshift(last);        // Add to front
}

console.log(a); // [4, 5, 1, 2, 3]
////////////////////////////////////////////////////////

const nums = [1,2,3,4,5];
const k = 2;

//using slice
const first= nums.slice(-2);
const second = nums.slice(0,3);
const final = first.concat(second)
console.log(final)

console.log(final)
