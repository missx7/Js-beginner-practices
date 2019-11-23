
/*
Q:create new string ==> taking 1st 3 chars of string then taking the last 3 chrs  adding characters together 
 them together in new string the new string lenghth must be >= 3  if not orginal string returend 
*/

let string = prompt()
let newString = ''
for (i=0 ; i < 3 ; i++){
    newString += string[i]
}
for (i=3 ; i > 0 ; i--){
    newString += string[string.length - i]
}

if (newString.length >= 3 ){
    document.write(newString)
}else {
    document.write(string)
}

const makeNewSTring = (str) => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3)

document.write(makeNewSTring('abc'))

/* 
Q: write JS program extract the first half of string of even length  
*/

const extractSTringChrI = (str) => str.slice(0, str.length/2)
document.write(extractSTringChrI('templ'))

/* 
Q: write JS program that cancotenate two strings  with out them 1st chr 
*/ 

const conc2Strings = (str,str2) => str.slice(1) + str2.slice(1)
document.write(conc2Strings('hell','yaah'))


/*
Q: write JS program have to number and find which one nearst to 100 
*/

const nearst = (val1 , val2) => val1 > val2 ? val1 : val2 
document.write(nearst(50, 50))

/* 
Q:write Js program to check a given string contains 2 to 4 
occcurences of specified charcter
*/

const check = ( str,chr) => str.split('').filter(ch => ch === chr).length ;
const contain = (str , chr ) => check(str, chr) >=2 && check(str,chr) <=4 ;
document.write(contain('hello','l'))

/* 
Q:write Js program to find the number of even digits in an array of integers
*/
const evenCount = (array) => array.filter(num => num % 2 === 0).length ; 
document.write(evenCount([1,2,3,4,5,6]))


/* 
Q: write Js program to find the number of even values up to a given number 
*/
const numArr = (num) => ([...num + ''].map(Number))
const evenNum = (num) => numArr(num).filter(num => num % 2 === 0)
document.write(evenNum(1267983494))


/* 
Q: write JS program to check wether a given array of integer is sorted in scending order 
*/
const isAscending = (arr) => {
    for(i =0 ; i < arr.length ; i++ ){
        if(arr[i+1] < arr[i]) return false ;
    } return true ; 
}

document.write(isAscending([1,2,3]))

/* 
Q:write js program  to get the large even number from an array 
*/

const largeEvenNum = (arr) => Math.max(...arr.filter(num => num % 2 === 0))
document.write(largeEvenNum([1,2,4,6]))


/*
Q:write a JS program to replace the first digit in a string 
(should contains at least digit) with $ char 
*/ 
const replaceDigt = (str) => str.replace(str.match(/\d+/g),'$')
document.write(replaceDigt('2gh'))

g ==> for all digits to replace 
d ===> [0-9]


/* 
Q: Given a year , report if it is a leap year 
Note: leap year is  year % 4 = 0 
*/

const leapYear = (year) =>  year % 4 === 0 ; 
console.log(leapYear(2014)) //false 


/*
Q: write js program to compare two objects to determine if the 1st 
one contains the same properties as the 2nd one 
(which may also have addtional properties)
*/
const compare = (obj1, obj2) => Object.keys(obj1).every(key => obj2[key])
document.write(compare({a:'a',c:'c'},{a:'a',b:'b'})) // false


/*
Q: write Js program to convert coma-separated values (CSV) string 
to 2D array . A new line indicate a new row in the array. 
*/
const convertCVS = (str) => str.split('\n').map(row => row.split(','))
const CSVstr = `abc,efg
abc,efg
abc,efg`
console.log(convertCVS(CSVstr))


/* 
Q : write JS program to generate a random hexdecimal color code 
*/

const Random = () => Math.floor(Math.random() * 16 ).toString(16);
const Hex = () => '#' + Array.from({length: 6}).map(Random).join('')
console.log(Hex())

/* 
Q : write JS function that returns true if  the provided 
predicate function returns true for all elements in collection
false otherwise 
*/

const isEveryElem = (arr,fn) => {
    for(i=0; i < arr.length ; i++){
        if (!fn(arr[i])){
            return false ;
        }
    } return true 
}
console.log(isEveryElem([1,2,3],(x) => x > 0))



/* 
Q: write JS function that returns a passed string with letters 
in alphabtical order. 
example : 'webmaster' 
output : 'abeemrstw'
*/
const orderStr = (str) => str.split('').sort().join('')
console.log(orderStr('webmastern'))

/* 
Q: write a JS function that accepts a string as parameter
and counts the number of Vowels  within string 
*/

const strLen = (str, vowel =['a','o','i','e','u']) =>
str.split('').filter(s => vowel.indexOf(s) > -1).length 
console.log(strLen('joooo'))

/* 
Q: write js function to convert an amount to coins 
input : 46 possible coins 25,10,5,2,1
output: 25,10,10,1
*/

const counCoins = (money , coins = [25,10,5,2,1]) => {
    const totalCoins = [] 
    for (i=0; i < coins.length ; i++){
        const thisCoinNum = Math.floor(money / coins[i])
        for(y=0 ; y < thisCoinNum ; y++){
            totalCoins.push(coins[i])
        } money -= coins[i] * thisCoinNum
    } return totalCoins
}

console.log(counCoins(46))

/* 
Q: write a JS function to extract unique char from string 
*/

const unique = (str) => str.split('').filter(
    (item,index,arr) => 
    arr.slice(index + 1).indexOf(item) == -1 
)
console.log(unique('asdfghhh'))
const uniqueSet = (str) => new Set(str.split(''))
console.log(uniqueSet('ahwehh'))


/* 
Q: write JS function to find first not repeated char 
input : 'abacddbec' 
output : 'e'
*/ 
const find = (str) => str.split('')
    .filter((item,index,arr) => 
    arr.filter(arrItem => arrItem === item).length === 1
)

console.log(find('abacddbec'))


/*
Q: write JS program to check two numbers and return true if one of the numbers
is 100 or if sum of the 2 numbers is 100
*/

const sum100 = (num1 , num2) => num1 === 100 || num2 === 100 || num1 + num2 === 100  
document.write(sum100(10, 5))// false 

/*
Q: write JS program to get the extnsion of file name
*/

const extension = (str) => str.slice(str.lastIndexOf('.'))
document.write(extension('index.html'))//.html


/* 
Q: write Js program replace every char in a given string with 
the char following it in the alphabet 
*/

const replacing = (str) =>
 str.split('')
 .map(char => String.fromCharCode(char.charCodeAt(0) +1))
 .join('')

document.write(replacing('abc'))


/* 
Q: write Js program to get current date 
Expected output : 
mm-dd-yyyy , mm/dd/yyyy , dd-mm-yyyy ,dd-mm-yyyy 
*/

const formtDate = (date = new Date()) => {
    const dd = date.getDate() 
    const mm = date.getMonth() 
    const year = date.getFullYear()
    return `${dd}/${mm}/${year}`
}
document.write(formtDate())


/* 
Q: write Js program to create new string adding 'New!' 
in front of given string. 
if the given string begins with 'New!' already 
then return the original string 
*/
const newStr = (str) => str.slice(0,4) === 'New!' ? str : str.padStart(str.length+5 , 'New! ')
const newStr2 = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`
document.write(newStr('hello'))
document.write(newStr2('hellow'))


/*
Q: write a function which take number as input 
and return the coressponding ASCII char for that value 
*/
const getChar = (num) => String.fromCharCode(num);
document.write(getChar(78))

/*
Q: Reverse String 
return a string in reverse 
e.g. reverseString('hello') == 'olleh' 
*/
//const reverseString = (str) => str.split('').reverse().join('')
/*function reverseString(str){
    let reversStr = '' 
    for(let i = str.length-1 ; i >= 0 ; i--){
        reversStr += str[i]
    }
    return reversStr
}
*/

const reverseString = (str) => str.split('').reduce((newStr,char) => char + newStr);

document.write(reverseString('hello'))

/* 
Q: Validate a Palindrome 
return true if palindrome and false if not 
e.g. isPalindrome('racecar') == true ,
isPalindrome('hello') == false 
*/
const isPalindrome = (str) => str.split('').reverse().join('') === str ? true: false 
document.write(isPalindrome('racecar'))
document.write(isPalindrome('hello'))

/*
Q: Reverse An Integer 
return an integer in reverse 
e.g. reverseInt(521) == 125 
*/

const reverseInt = (num) => String(num).split('').reverse().join('')

document.write(reverseInt(521))

/*
Q: CAPTALIZE LETTERS 
return a string with the first letter of every word captailaized 
e.g. capitalizeLetters('i love javascript ') == I Love Javascript 
*/
const capitalizeLetters = (str) => str.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ')
document.write(capitalizeLetters('i love javascript '))


/*
Q:Longest Word
return the longest word in string 
ex. longestWord('Hello, my name is X') ==> 'Hello'
ex. longestWord('Hello there , my name is X') ==> ['Hello','there']
*/


function longestWord(str){
    // filter Array 
    const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
    // sort py length 
    const sorted = wordArr.sort((a,b)=> b.length - a.length)
    // if multiple words an array 
    const longestWordArray = sorted.filter((word) => word.length === sorted[0].length)
    // check  
    if(longestWordArray.length === 1){
        return longestWordArray[0]
    }return longestWordArray
}
document.write(longestWord('Hello , my name is X'))


/*
Q:Array Chunking
split an array in to chuncked arrrys of specific length 
ex. chunckArray([1,2,3,4,5,6,7],3) === ([1,2,3],[4,5,6],[7,8,9])
*/
function chunckArray(arr, len){
    const chunckedArr = [] 
    let i = 0 ; 
    while (i < arr.length){
        chunckedArr.push(arr.slice(i,i+len))
        i += len 
    }
    return chunckedArr
}
document.write(chunckArray([1,2,3,4,5,6,7],3))

/*
Q:Flatten Array
Take an Array of arrays and flatten to single Array 
e.g. flatenArray([[1,2],[3,4],[5,6],[7]]) === [1,2,3,4,5,6,7]
*/
function  flatenArray(arr){
    newArr = []
    for( let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            newArr.push(arr[i][j])
        }
    }
    return newArr
}
const flatenArray = (arr) => arr.reduce((a,b)=> a.concat(b))
const flatenArray = (arr) =>  [].concat.apply([],arr) // apply function 
const flatenArray = [].concat(...arr)
console.log(flatenArray([[1,2],[3,4],[5,6],[7]]))


/*
Q:Anagrams
return true if anagram and false if not 
ex. 'elbow' === 'below' 
ex. 'dormitory' === 'dirty room' 
*/
const isAnagramx = (str1,str2) => str1.split('').sort().every((value,index) => value ===  str2.split('').sort()[index])
console.log(isAnagramx('elbow' ,'below' ))



/*
Q:Letter Changes
change every letter of the string to the one that sollows it 
and captlize the vowels 
// Z should truns to A 
// ex. 'hello there' === 'Ifmmp UIfsf' 
*/
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
      if (char === 'z' || char === 'Z') {
        return 'a';
      } else {
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });
  
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  
    return newStr;
  }
  
  console.log( letterChanges('Hello There'))

Resourses : 
-https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
-https://www.youtube.com/watch?v=FfchU1FS2IA
