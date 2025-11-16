// array have [1, 2, 3, 4, 5] but need output as [4, 5, 1, 2, 3]
let a = [1, 2, 3, 4, 5];
let rotation = 2;

for (let i = 0; i < rotation; i++) {
  let last = a.pop();     // Remove from end
  a.unshift(last);        // Add to front
}

console.log(a); // [4, 5, 1, 2, 3]
////////////////////////////////////////////////////////

