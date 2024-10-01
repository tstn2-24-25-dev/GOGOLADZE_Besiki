const arr = [4, 8, 2, 10, 1, 9, 7, 6, 3, 5];

function mainFunction(arr, low, high) {
  let higher = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= higher) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function tri_rapide(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let higherIndex = mainFunction(arr, low, high);

    tri_rapide(arr, low, higherIndex - 1);
    tri_rapide(arr, higherIndex + 1, high);
  }
  return arr;
}

console.log(tri_rapide(arr));
