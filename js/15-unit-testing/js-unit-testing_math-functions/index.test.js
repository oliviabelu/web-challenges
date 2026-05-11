import { add, subtract, multiply, divide } from "./index.js";

//testing add():
test("returns 5 if called with add(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  const valueA = Math.random();
  const valueB = Math.random();

  const result = valueA > valueB ? add(-valueA, valueB) : add(valueA, -valueB);

  //  const result = add(-10, 5);
  expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//testing subtract();
test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const valueA = Math.random();
  const valueB = Math.random();

  const result =
    valueA < valueB ? subtract(valueA, valueB) : subtract(valueB, valueA);
  //const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//testing multiply();
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const firstValue = -Math.random();
  const secondValue = Math.random();

  const result = multiply(firstValue, secondValue);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const firstValue = Math.random();
  const secondValue = -Math.random();

  const result = multiply(firstValue, secondValue);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const firstValue = -Math.random();
  const secondValue = -Math.random();

  const result = multiply(firstValue, secondValue);
  expect(result).toBeGreaterThan(0);
});

//testing divide();
test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const firstValue = Math.random();
  const secondValue = 0;

  const result = divide(firstValue, secondValue);
  expect(result).toBe("You should not do this!");
});
