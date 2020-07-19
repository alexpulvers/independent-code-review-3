import { reportAge } from "./../src/main.js";
import UserLifeStyle from "./../src/main.js";
import { getExpectancy } from "./../src/main.js";
describe("reportAge()", () => {
  test("should return a value for each property in reportAge()", () => {
    let age = 20;
    let result = reportAge(age);
    expect(reportAge(age)).toEqual(result);
  });
});

describe("getExpectancy", () => {
  test("should use getExpectancy and return 60", () => {
    let expectancy = 80;
    let smoker = "yes";
    let exercise = "yes";
    let disease = "yes";
    let newUser = getExpectancy(smoker, exercise, disease, expectancy);
    expect(newUser).toEqual(60);
  });
});
