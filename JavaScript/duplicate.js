//seen in obj
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" }
];

const seen = new Set();

let dupr= users.filter(user =>{
  if(seen.has(user.id)){
    return false;
  } else {
    seen.add(user.id);
    return true;
  }
})

console.log('dupr',dupr)

//using set operator
let arr = [1,2,3,4,1,2,3,4];

// const dupremo =new Set(arr);
const dupremo =[...new Set(arr)];
console.log('SET OPERATOR1',dupremo);

//using function
function duprem(arr) {
    return [...new Set(arr)];
}
console.log('SET OPERATOR FUNCTION',duprem(arr));


//for each

let array = ["apple", "mango","apple", "orange", "mango", "mango"];
function removeDupe(){
    let heva =[];
    array.forEach(dummy=>{
        if(!heva.includes(dummy)){
            heva.push(dummy)
        }
    })
    return heva;
}
console.log('FOR EACH FUNCTION',removeDupe());

//reduce
    let heva = array.reduce((acc,array)=>{
        if(!acc.includes(array)){
            acc.push(array)
        }
        return acc; 
    }, [])

    console.log('REDUCE',heva);

//filter
const filterDuplicates = array.filter((value, index, self) => self.indexOf(value) === index);

console.log('Filter',filterDuplicates);



//map
const map = new Map();
arr.forEach(value => map.set(value, true));
const mapDuplicates = [...map.keys()];


console.log('MAP FUNCTION',mapDuplicates);



//seen

let check = {};
let result = [];

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  if (!check[current]) {
    check[current] = true;
    result.push(current);
  }
}

console.log('last',result)
 // Output: [1, 2, 3, 4]
