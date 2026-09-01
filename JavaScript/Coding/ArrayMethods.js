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
/////////////////////////////////////////////////////////////////////////////

let Input1= [[1, [2, [3, 4]], 5], 6]
let res = Input1.flat(3);

console.log(res)


let Input2= [["a"], ["b", ["c", "d"]], "e"]

const resu = (arr) => {
  return arr.flat(Infinity);
};

console.log(resu)

///////////////////////////////////////////////////////////////////

const employees = [
  { id: 1, name: "Asha", dept: "IT", salary: 30000 },
  { id: 2, name: "Kumar", dept: "HR", salary: 25000 },
  { id: 3, name: "Ravi", dept: "IT", salary: 40000 },
  { id: 4, name: "Divya", dept: "Finance", salary: 35000 },
];

// 1.group by (count: totsal)
// output:

// {
//   IT: { count: 2, totalSalary: 70000 },
//   HR: { count: 1, totalSalary: 25000 },
//   Finance: { count: 1, totalSalary: 35000 }
// }
const redu = employees.reduce((acc,cuu)=>{
   let dept = cuu.dept;
   if(!acc[dept]){
       acc[dept] = {count:0, totalSalary:0};
   }
   acc[dept].count +=  1;
   acc[dept].totalSalary += cuu.salary;
   
   return acc;
},{})
console.log(redu);
