// This code is to execute from website
let arr = prompt("enter symbols and numbers separated by spaces:");

// This code is to execute in local
// let arr = "* + 1 2 - 3 4";

function rpn(value) {
  let splitValue = value.split(" ");
  function mainFunction(splitValue) {
    let shiftValue = splitValue.shift();
    if (!isNaN(shiftValue)) {
      return parseInt(shiftValue, 10);
    }

    let rpn1 = mainFunction(splitValue);
    let rpn2 = mainFunction(splitValue);

    switch (shiftValue) {
      case "+":
        return rpn1 + rpn2;
      case "-":
        return rpn1 - rpn2;
      case "*":
        return rpn1 * rpn2;
      case "/":
        return Math.floor(rpn1 / rpn2);
      default:
        throw new Error("Error");
    }
  }
  return mainFunction(splitValue);
}

console.log(rpn(arr));
