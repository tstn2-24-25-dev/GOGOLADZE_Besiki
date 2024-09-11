let input = `8
Chili 101 2
Estonia 58 1
Romania 102 3
Ecuador 103 4
Madagascar 104 5
Oman 50 1
Nicaragua 51 3
Yemen 53 4`;

function lastDelegation(input) {
  let lines = input.split("\n");
  let num = parseInt(lines[0], 10);
  let lastDelegation = "";
  let maxTime = -1;

  for (let i = 0; i <= num; i++) {
    let [name, distanceStr, speedStr] = lines[i].split(" ");
    let distance = parseInt(distanceStr, 10);
    let speed = parseInt(speedStr, 10);

    let time = distance / speed;

    if (time > maxTime) {
      maxTime = time;
      lastDelegation = name;
    }
  }
  return lastDelegation;
}

console.log(lastDelegation(input));
