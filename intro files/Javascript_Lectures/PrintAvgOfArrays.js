//6.Get and print Average of Arrays
//printAverageofArray(arr)
//Analyze an array's values and print the average.

//Create a function that takes in an array.
//Create a variable called sum and set it to 0
// could also set it to the first number in the array.
// Go through the numbers by creating a for loop that starts at 0 and ends at the array.length. and increment by 1
//in the loop add each value to sum.
//Add all the numbers together and divide by the number of values.
//var myArray = [1, 2, 3];
//console.log(myArray.length);
function printAverageOfArray(arrInput) {
  var sum = 0;
  for (var i = 0; i < arrInput.length; i++) {
    sum += arrInput[i];
  }
  console.log(sum / arrInput.length);
}
printAverageOfArray([1, 2, 3, 4]);
