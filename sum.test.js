import sum from "./sum.js";
describe("test for sum fnx", () => {
  test("2 + 2 = 4 ", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("2 + 2 = 4 ", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
