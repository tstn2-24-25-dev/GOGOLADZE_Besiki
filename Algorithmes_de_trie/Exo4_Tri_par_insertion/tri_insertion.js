let arr = [27, 63, 1, 72, 64, 58, 14, 9];

function tri_insertion(val) {
  for (let i = 0; i < val.length; i++) {
    let newVal = val[i];
    let j = i - 1;
    while (j >= 0 && val[j] > newVal) {
      val[j + 1] = val[j];
      j = j - 1;
    }
    val[j + 1] = newVal;
  }
  return val;
}

console.log(tri_insertion(arr));
