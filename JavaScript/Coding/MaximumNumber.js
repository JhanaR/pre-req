let array =  [5,2,9,33,55,11,6,88];

const mathMax = Math.max(...array);
console.log('mathMax',mathMax);
//////////////////////////////////////////////////////////////////////////////
const red = array.reduce((a , b) => a>b ? a : b)
console.log('reduce',red);

//////////////////////////////////////////////////////////////////////////////

function largestNumber(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max; 
}
console.log('fxn',largestNumber(array)); 

//////////////////////////////////////////////////////////////////////////////
  function findLargestNumber(arr) {
    return [...new Set(arr)].sort((a, b) => b - a)[0];
  }
  console.log('set sort',findLargestNumber(array));