// let x = { value: 10 };
// let y = x;

// x.value = 20;

// console.log("x", x);

// console.log("y", y);

let object = { value: 10 };

function increase(object) {
  object.value++;
}

increase(object);

console.log(object);
