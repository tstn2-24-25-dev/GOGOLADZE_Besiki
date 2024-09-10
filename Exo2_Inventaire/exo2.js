function findHighestStockProduct(n, products) {
  let productsMap = new Map();

  for (let i = 0; i < n; i++) {
    if (n > products.length) {
      console.log(
        "number is more than products. please enter as much number as products!"
      );
    } else {
      var [name, price] = products[i].split(" ");
    }
    prices = parseInt(price);
    // console.log(prices)

    if (productsMap.has(name)) {
      productsMap.set(name, productsMap.get(name) + prices);
    } else {
      productsMap.set(name, prices);
    }
  }

  let maxStockValue = Math.max(...productsMap.values());

  let result = [];
  productsMap.forEach((value, key) => {
    if (value === maxStockValue) {
      result.push(key);
    }
  });

  //   console.log(result)

  return result.join(" ");
}

let n = 10;
let products = [
  "pomme 5",
  "poire 18",
  "pomme 5",
  "orange 3",
  "poire 28",
  "pomme 5",
  "poire 18",
  "pomme 50",
  "orange 3",
  "poire 28",
];

console.log(findHighestStockProduct(n, products));
