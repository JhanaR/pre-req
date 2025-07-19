const emp1 = { name: "Jhana", role: "Tech Lead" };
const emp2 = { location: "India", department: "UI" };
const allowed = ["HTML", "CSS", "JavaScript", "React"];

function buildProfile(...skills) {
  const profile = { ...emp1, ...emp2 };
  const filteredSkills = skills.filter(skill => allowed.includes(skill));
  profile.skills = filteredSkills;
  return profile;
}

console.log(buildProfile("orange", "Python", "CSS", "React", "Node.js"));

/*Write a describeUser function that takes a user object:

const user = {
  name: "Jhana",
  experience: 10,
  domain: "UI Development"
};

And returns a string using template literals like:

"Jhana has 10 years of experience in UI Development."*/

function describeUser(user) {
  const { name, experience, domain } = user;
  return `${name} has ${experience} years of experience in ${domain}.`;
}

const user = {
  name: "Jhana",
  experience: 10,
  domain: "UI Development"
};

console.log(describeUser(user));

////////////////////////////////////////////////////////

const users = [
  { name: "Jhana", role: "Lead" },
  { name: "Ravi", role: "Dev" },
  { name: "Asha", role: "QA" }
];

const formation = users.map(({ name, role }) => `${name} is a ${role}`);

console.log(formation);

///////////////////////////////////////////////////////////////
const userList = [
  { name: "Jhana", role: "Lead" },
  { name: "Ravi", role: "Dev" },
  { name: "Asha", role: "QA" }
];
 //Use .filter() to return only users whose role is "Lead"
 
 const newFilt = userList.filter(user => user.role === "Lead");

console.log(newFilt);
///////////////////////////////////////////////////////////////


const useList = [
  { name: "Jhana", role: "Lead" },
  { name: "Ravi", role: "Dev" },
  { name: "Asha", role: "QA" },
  { name: "Kiran", role: "Dev" }
];

function getUsersByRoles() {
  const allowedRoles = ["Dev", "QA"];
  return useList.filter(user => allowedRoles.includes(user.role));
}

console.log(getUsersByRoles());

///////////////////////////////////////////////////////////////
const usList = [
  { name: "Jhana", role: "Lead" },
  { name: "Ravi", role: "Dev" },
  { name: "Asha", role: "QA" },
  { name: "Kiran", role: "Dev" }
];

function getUsersByRole() {
  return usList.filter(user => (user.role === "Dev"));
}

console.log(getUsersByRole(usList)); //[ { name: 'Ravi', role: 'Dev' }, { name: 'Kiran', role: 'Dev' } ]

////////////////////////////////////////////////////////////////////////
const obj1 = { name: "Jhana" };
const obj2 = { name: "Jhana" };

console.log(obj1 === obj2);//false
////////////////////////////////////////////////////////////////////////
const obj3 = { name: "Jhana" };
const obj4 = obj3;

obj4.name = "React Dev";
console.log(obj3.name);//React Dev
console.log(obj4.name);//React Dev
////////////////////////////////////////////////////////////////////////
const obj5 = { name: "Jhana" };
const obj6 = { ...obj5 };

obj6.name = "React Dev";

console.log(obj5.name); // ?Jhana
console.log(obj6.name); // ?React Dev

const obj7 = { user: { name: "Jhana" } };
const obj8 = { ...obj7 };

obj8.user.name = "React Dev";

console.log(obj7.user.name); // React Dev (because nested object is still shared)
////////////////////////////////////////////////////////////////////////