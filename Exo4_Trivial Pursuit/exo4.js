let colors = ["orange", "jaune", "vert", "rose", "bleu", "violet"];

function findColor(lines) {
  let sumLines = 0;
  for (let i = 0; i < lines.length; i++) {
    sumLines += lines[i];
  }
  let position = colors.indexOf(5);

  let result = (position + sumLines) % 6;
  return colors[result];
}

lines = [3, 2, 5];

console.log(findColor(lines));
