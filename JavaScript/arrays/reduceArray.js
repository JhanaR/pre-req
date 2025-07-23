const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "David", role: "user" },
  { id: 5, name: "Eve", role: "manager" }
];

const groupRole = users.reduce((acc, curr)=>{
  const role = curr.role;
  
  if(!acc[role]){
    acc[role] = [];
  }
  
  acc[role].push(curr);
  return acc
},{})

console.log('groupRole',groupRole)