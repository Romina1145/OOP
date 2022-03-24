//Creating Objects
// in Java Script Function are Objects !!!!!!

// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor functions;

class Circle {
  constructor(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
      return defaultLocation;
    };

    this.draw = function () {
      computeOptimumLocation(0.1);
      console.log("draw");
    };
    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },
      set: function (value) {
        if (!value.x || !value.y) throw new Error("Invalid location");
        defaultLocation = value;
      },
    });
  }
}

const anotherObject = new Circle(10);
anotherObject.defaultLocation = 1;

for (let key in anotherObject) {
  if (typeof anotherObject[key] !== "function") {
    console.log(key, anotherObject[key]);
  }
}

// adding
anotherObject.location = { x: 1 };
// delete
delete anotherObject.location;

const keys = Object.keys(anotherObject);
console.log(keys);

if ("radius" in circle) console.log("Circle!");

// creating an instance of a class
// 'new' will create an empty object
// this will point to that object from Circle function

// constructor refers to the function that was used to create that object
