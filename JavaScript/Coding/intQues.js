const data = [
{name:"John",score:82},
{name:"Doe",score:64},
{name:"Bob",score:94},
{name:"Will",score:77},
{name:"Smith",score:86},
{name:"Jen",score:54}
];

//Complete the below function

function getUsersByScore(data, scoreAbove) {
  return data.filter(user =>user.score >scoreAbove)
}
const results = getUsersByScore(data, 80); 
console.log(results); 
