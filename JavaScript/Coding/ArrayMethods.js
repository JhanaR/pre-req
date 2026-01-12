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

const red =  data.reduce((acc,cur)=>{
    let cat = cur.category;
    if(!acc[cat]){
      acc[cat] = []
    }
    acc[cat].push(cur)
 return acc;
},{})
console.log('red',red)
