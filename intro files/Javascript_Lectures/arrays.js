//https://www.guru99.com/stack-vs-heap.html

//array
//reference Datatypes

var myName = "Shawn Johnson";
var myLocation = "Hedgesville";
var myAge = "40";
// Arrays can store collections of data
// Arrays can hold more than one datatype
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//var b = a;
//b[4] = 5;
//console.log(a);
//console.log(b);
var myInfo = ["Shawn Johnson", "Hedgesville", "40"];
myInfo[3] = "green";
myInfo[2] = 40;
myInfo.push = "Rock Park";
//myInfo.pop([4]);
for (var i = 0; i < myInfo.length; i++) {
  console.log(myInfo[i]);
}
//5. Find and print Max
// PrintmaxOfArray(arr)
//gven an array, find and print it's largest element.

//pseudocode
//Write a funtion call PrimtMaxOfArray(arr) that takes in array as input.
//create a variable called max to keep track of the maximum value, and set it to the first variable in the array.
// Gonna need and if statement to compare each value against.
// if a value is larger, make that new max// after the loop, print max value.
function PrintOfMaxArray(arr) {
  var max = arr[i];

  for (i = 1; i < arr.length; i++) if (max > arr[i]) max = arr[i];
  printmaxofArray(i);

  console.log(max);
  console.log(printMaxOfArray([4, 7, 1, 9, 3, 6, 1, 0]));
}
//myInfo[3]="green"
// myinfo.push("Rock Park");
//concole.log (myInfo)
//my info.pop()
//console.log
