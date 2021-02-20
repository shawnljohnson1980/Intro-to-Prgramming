
function printOddOfArray() {
    var arr = [1, 3, 5, 7, 9, 2, 8, 4, 6, 7, 3, 8]
    for (var i = 1; i < arr.length; i++) {
        if (arr.length >= arr[i]) {
            console.log("I'm an odd duck", arr[i]);
        }
    }
}
printOddOfArray();
