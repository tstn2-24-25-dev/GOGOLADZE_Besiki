let arr = [4, 8, 2, 10, 1, 9, 7, 6, 3, 5];

function tri_rapide(val) {
  let num = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] <= val[i + 1]) {
      num = val[i];
      if (num <= val[i]) {
        num = val[i];
      }
    }
  }
  console.log(num);
}

tri_rapide(arr);
