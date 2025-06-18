arr = [5,2,9,33,55,11,6,88];

function largestNumber (check) {
let largest = -Infinity;
for(let i=0;i<check.length; i++){
	if(check[i]>largest){
	largest=check[i];
	}
}
return largest;
}

console.log(largestNumber(arr));

function secondLargest(max){
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i=0; i<max.length; i++){
	if(max[i]>largest){
		secondLargest = largest;
		largest = max[i];
	} else if (max[i] > secondLargest && max[i] !== largest){
		secondLargest = max[i]
	}
}
return secondLargest;
}
console.log(secondLargest(max))