let arr = [33, 27, 8, 54, 16, 31, 14];

function separete(value) {
  const halfLength = Math.floor(value.length / 2);
  const firstHalf = value.slice(0, halfLength);
  const secondHalf = value.slice(halfLength, value.length);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right, " left and right");
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function tri_fusion(value) {
  if (value.length <= 1) {
    return value;
  }

  let [first, second] = separete(value);
  console.log(first, second, " first and second");
  return merge(tri_fusion(first), tri_fusion(second));
}

console.log(tri_fusion(arr));
