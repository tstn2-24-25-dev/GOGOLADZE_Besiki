function page(pageSize, imageSize) {
  let perPage = pageSize;
  let pages = 1;
  let arr = [[]];
  imageSize.forEach((size) => {
    if (size <= perPage) {
      perPage -= size;
      arr[arr.length - 1].push(size);
    } else {
      pages += 1;
      perPage = pageSize - size;
      arr.push([size]);
    }
  });
  let result = arr.map((page) => page.join("/"));
  return `pages: ${pages}\nper page: ${result}`;
}

let imageSize = [6, 4, 4];

console.log(page(10, imageSize));
