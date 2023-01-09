import { sum, mult } from "../calculator";

it("should sum numbers", () => {
  expect(sum(2, 5)).toEqual(7);
});

it("should mult numbers", () => {
  expect(mult(2, 5)).toEqual(10);
});
