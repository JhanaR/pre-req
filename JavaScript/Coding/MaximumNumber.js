let array =  [5,2,9,33,55,11,6,88];
function largestNumber (arr){
    let max = -Infinity;
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
	 return max;
}
console.log(largestNumber(arr)); 

let arr =  [5,2,9,33,55,11,6,88];

function secondLargestNumber(arr) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
	//Why -Infinity? Because any number in the array will be greater than this value
	for (i=0; i < arr.length; i++){
	if(arr[i] > firstMax){
	/*firstMax = 5, secondMax = -Infinity
		Next is 2 → it's smaller than both, no change
			Next is 9 → bigger than firstMax (5)
				So: secondMax = 5, firstMax = 9
		Next is 33 → bigger than firstMax (9)
			So: secondMax = 9, firstMax = 33
		Next is 55 → bigger than firstMax (33)
			So: secondMax = 33, firstMax = 55
		Next is 11 → smaller than firstMax, smaller than secondMax, no change
		Next is 6 → still smaller
		Next is 88 → bigger than firstMax (55)

			So: secondMax = 55, firstMax = 88*/
	secondMax = firstMax;
    firstMax = arr[i];
	} else if (arr[i] > secondMax && arr[i] !== firstMax) {
	secondMax = arr[i]
	/*This is the case where the current number is not the biggest, but still important:
	If the number is greater than secondMax, and
	It is not equal to firstMax (to avoid duplicates),
	Then it’s the new second largest number.*/
	}
    }
	
 return secondMax
}