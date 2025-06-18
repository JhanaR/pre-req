let str = "aabbcddex";

function firstNonRepeatingChar(str){
let find ={}

for(let char of str){
	find[char] = (find[char] || 0)+1;
}
for(let char of str){
if(find(char)===1)
	return find
}
return null;
}