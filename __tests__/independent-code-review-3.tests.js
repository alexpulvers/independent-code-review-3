import { reportAge } from "./../src/main.js";
import UserLifeStyle from "./../src/main.js";
describe("reportAge()", () => {
  test("should return a value for each property in reportAge()", () => {
    let age = 20;
    let result = reportAge(age);
    expect(reportAge(age)).toEqual(result);
  });
});

describe("UserLifeStyle", () => {
  test("should instantiate a new object called UserLifeStyle", () => {
    let expectancy = 80;
    let age = 20;
    let smoker = true;
    let exercise = true;
    let disease = true;
    let newUser = UserLifeStyle(age, smoker, exercise, disease);
    expect(newUser).toEqual();
  });
});
