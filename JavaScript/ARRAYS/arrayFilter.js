const ages = [1, 33, 76, 40, 66];
let filter = ages.filter((value)=>{
    return value > 40
})
console.log('filter value',filter)



function checkAge(age) {
  return age >= 18;
}
const age = [1, 33, 76, 40, 66].filter(checkAge)

console.log('filter function',age)