import { add } from "../components/example";

test("check", () => {
  const num1 = 10;
  const num2 = 20;
  const exepctedNum = 30;

  expect(add(num1, num2)).toBe(exepctedNum);
});
