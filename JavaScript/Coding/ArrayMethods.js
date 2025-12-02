//Write a function that takes an array of numbers and returns only the even numbers using .filter()
function filterFun() {
  let array = [1, 2, 3, 4, 5, 6];

  let arrFil = array.filter(num => num % 2 === 0);

  console.log(arrFil);
}

filterFun(); // [2, 4, 6]


/////////////////////////////////////////////////////////////////////////////
 
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'spinach' }
];

function groupByCategory(arr) {
  let result = {}; // empty object

  arr.forEach(function(item) {;
    let {category,name } = item;

    // If category not created yet, create an empty array
    if (!result[category]) {
      result[category] = [];
    }

    // Push only name
    result[category].push({ name: name });
  });

  return result;
}

console.log(groupByCategory(data));

// Output:
// {
//   fruit: [{ name: 'apple' }, { name: 'banana' }],
//   vegetable: [{ name: 'carrot' }, { name: 'spinach' }]
// }
