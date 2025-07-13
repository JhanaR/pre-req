const employee = {
  fullName: "Jhana R",
  position: "UI Developer",
  experience: 10,
  skills: ["HTML", "CSS", "JavaScript"]
};

// 👉 Extract fullName and skills using destructuring
// 👉 Assign fullName to a variable called 'name'
// 👉 Print name and skills


const {fullName: name,skills} = employee;

console.log('name',name); //name Jhana R
console.log('skills',skills); //skills [ 'HTML', 'CSS', 'JavaScript' ]
