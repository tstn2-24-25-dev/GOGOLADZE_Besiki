function power(p, m) {
  for (let i = 0; i < m; i++) {
    if (p % 3 == 0) {
      p = p / 3;
    } else if (p % 2 == 0) {
      p = p / 2;
    } else {
      p -= 1;
    }
  }
  return p;
}

let powerPoint = 108;
let month = 4;

let result = power(powerPoint, month);
console.log(result);
