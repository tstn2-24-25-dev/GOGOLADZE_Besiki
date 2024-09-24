let arr = [33, 27, 8, 54, 16, 31, 14];

function trie_fusion(value) {
  const halfLength = Math.floor(value.length / 2);
  const firstHalf = value.slice(0, halfLength);
  const secondHalf = value.slice(halfLength, value.length);

  function mainFunction(val) {
    for (let i = 0; i < val.length; i++) {
      for (let j = 0; j < val.length - 1 - i; j++) {
        if (val[j] > val[j + 1]) {
          let temp = val[j];
          val[j] = val[j + 1];
          val[j + 1] = temp;
        }
      }
    }
    return val;
  }

  return `[${mainFunction(firstHalf)}] [${mainFunction(secondHalf)}]`;
}

console.log(trie_fusion(arr));
