const { triangle, square, circle } = require("./shapes.js");

// Testing a triangle with a blue background (example)
describe("triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Testing a square with a red background
describe("square test", () => {
  test("test for a square with a red background", () => {
    const shape = new square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="red" />'
    );
  });
});

// Test a circle with a hexadecimal color background
describe("circle test", () => {
  test("test for a circle with a #BC877C background", () => {
    const shape = new circle();
    shape.setColor("#BC877C");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#BC877C" />'
    );
  });
});
