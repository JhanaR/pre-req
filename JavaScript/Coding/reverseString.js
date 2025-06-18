//Reverse the letters in a string

let word = "Hello World";

function reverseStr(word){
let splitWord = word.split(''); 
let reversedWord = splitWord.reverse(); 
let joinWord = reversedWord.join('');

return joinWord

}
console.log(reverseStr(word));

//Reverse Each Word in a Sentence
let sentence = "Hello World";

function reverseEachWord(senten) {
    let splitSentence = senten.split(' ');
    let reversedWord = splitSentence.map(function(word){
        return word.split('').reverse().join('')
    })
    return reversedWord.join('');
}
console.log(reverseEachWord(sentence));