// let letters = ["a", 1, "b", 3, "c", 3, "d", 2, "e", 1, "f", 4, "g", 2, "u", 1];

const obj = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  u: 1,
};

function calc(value) {
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        var e = Object.keys(obj)[i]
    }
    // Object.keys(obj).forEach(i => {
    //     e = i
    // })
    console.log(e);
    
  for (let i = 0; i < value.length; i++) {
    // console.log(value[i], )
    if (value[i]) {
    //   console.log(Object.values(obj));
    }
  }
}

calc("cafe");
