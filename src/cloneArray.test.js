const cloneArray = require("./cloneArray");

test("bla", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toBe(array);
});
