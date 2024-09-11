let input = `3
0 5 7 2
4 -2 9 -2
8 -4 6 3`;

function corners(corners) {
  let lines = corners.split("\n");
  let perLine = parseInt(lines[0], 10);

  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;

  for (let i = 1; i <= perLine; i++) {
    const [x1, y1, x2, y2] = lines[i].split(" ").map(Number);

    minX = Math.min(minX, x1, x2);
    minY = Math.min(minY, y1, y2);
    maxX = Math.max(maxX, x1, x2);
    maxY = Math.max(maxY, y1, y2);
  }
  return `${minX} ${minY} ${minX} ${maxY} ${maxX} ${minY} ${maxX} ${maxY}`;
}

let result = corners(input);
console.log(result);
