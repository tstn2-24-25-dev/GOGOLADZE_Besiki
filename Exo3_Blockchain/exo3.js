function blockchainFunction(P, N, requests) {
  let book = ""; // empty book
  const valid = Math.floor(P / 2);

  for (let i = 0; i < N; i++) {
    const [C, Q] = requests[i];
    if (Q > valid) {
      book += C; // add the letter to the book if the request is validated
    }
  }

  return book; // return the final content of the book
}

const P = parseInt(prompt("Number of people storing the book: "), 10);
const N = parseInt(prompt("Number of write requests: "), 10);
let requests = [];
for (let i = 0; i < N; i++) {
  let input = prompt(
    "Enter a letter and a number (separated by a space): "
  ).split(" ");
  let C = input[0];
  let Q = parseInt(input[1], 10);
  requests.push([C, Q]);
}

let result = blockchainFunction(P, N, requests);

let content = document.querySelector(".content");
let h1Result = document.querySelector(".result");
content.textContent = "Content of the book is:";
h1Result.textContent = result;
h1Result.style.color = "red";
