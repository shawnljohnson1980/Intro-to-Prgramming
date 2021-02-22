function ZeroOutArrayNegativeVal(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(ZeroOutArrayNegativeVal([5, 9, -3, 2, 11, -12, 6, 22]));
