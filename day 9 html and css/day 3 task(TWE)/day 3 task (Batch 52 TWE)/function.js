1. // ANONYMOUS Function
// Print Odd Numbers in an Array:
const printOdd = function(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i]% 2 ===1) {
            console.log(arr[i]);
        }
    }
};
printOdd ([1,2,3,4,5,6,7,8,9]);

// IIFE Function
// Print Odd Numbers in an Array:
(function(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i]% 2 ===1) {
            console.log(arr[i]);
        }
    }
})
printOdd ([10,12,13,14,15,16,17,18,19]);


// ANONYMOUS FUNCTION SUM OF ARRAY
const myNums = [1,2,3,4,5];

var sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum) 


const sentenceCase=function(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
 
console.log(sentenceCase('all is well'));


// ANONYMOUS FUNCTION MEDIAN OF ARRAY
const getMedian = function(ar1, ar2, n)
{
let j = 0;
let i = n - 1;
while (ar1[i] > ar2[j] && j < n && i > -1)
{
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--; j++;
}
ar1.sort(function(a, b){return a - b});
ar2.sort(function(a, b){return a - b});
return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
}
 
let ar1 = [ 1, 12, 15, 26, 38 ];
let ar2 = [ 2, 13, 17, 30, 45 ];

let n1 = 5;
let n2 = 5;
if (n1 == n2)
console.log("Median is "+ getMedian(ar1, ar2, n1));
else
console.log("Doesn't work for arrays of unequal size");

// IIFE FUNCTION: GET MEDIAN

(function getMedian(ar1, ar2, n)
{
let j = 0;
let i = n - 1;
while (ar1[i] > ar2[j] && j < n && i > -1)
{
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--; j++;
}
ar1.sort(function(a, b){return a - b});
ar2.sort(function(a, b){return a - b});
return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
})
 
let ar1 = [ 1, 12, 15, 26, 38 ];
let ar2 = [ 2, 13, 17, 30, 45 ];

let n1 = 5;
let n2 = 5;
if (n1 == n2)
console.log("Median is "+ getMedian(ar1, ar2, n1));
else
console,log("Doesn't work for arrays of unequal size");


// ANONYMOUS FUNCTION REMOVE removeDuplicates:
const removeDuplicates=function(arr, n)
{
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
 
    var j = 0;
    for (var i=0; i<n-1; i++)
 

        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
 
    temp[j++] = arr[n-1];
 

    for (var i=0; i<j; i++)
        arr[i] = temp[i];
 
    return j;
}
 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    var n = arr.length;
 

    n = removeDuplicates(arr, n)
    for (var i=0; i<n; i++)
       document.write( arr[i]+" ");


 

//  ANONYMOUS FUNCTION ROTATE
       const RightRotate=function(a, n, k)
       {
        
           
           k = k % n;
        
           for (let i = 0; i < n; i++) {
               if (i < k) {
        
                   document.write(a[n + i - k] + " ");
               }
               else {
                   
                   document.write((a[i - k]) + " ");
               }
           }
           document.write("<br>");
       }
        
       
       let Array = [1, 2, 3, 4, 5];
       let N = Array.length;
       let K = 2;
        
       RightRotate(Array, N, K);
       

    //    ARROW FUNCTION PRINT ODD NUMBERS:

    const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds); // [19, 5 , 9, 13]

// ARROW FUNCTION SUM OF ARRAY
sum = (a, b) => {
    return(a+b)
  }
    x= sum(34,87)
    console.log(x)
    
    sum ([34,87]);

// print prime numbers in arrow function
    const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

// ARROW FUNCTION FIND isPalindrome
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

