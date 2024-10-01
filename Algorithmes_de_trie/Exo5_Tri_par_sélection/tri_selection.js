let arr = [4, 8, 2, 10, 1, 9, 7, 6, 3, 5];

function mainFunction(val, index) {
  let minIndex = index;
  for (let j = index + 1; j < val.length; j++) {
    if (val[j] < val[minIndex]) {
      minIndex = j;
    }
  }
  return minIndex;
}
function tri_selection(val) {
  for (let i = 0; i < val.length; i++) {
    let minIndex = mainFunction(val, i);
    if (minIndex !== i) {
      let temp = val[i];
      val[i] = val[minIndex];
      val[minIndex] = temp;
    }
  }
  return val;
}

console.log(tri_selection(arr));
