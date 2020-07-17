export const Planets = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333,
  saturn: 10759,
  uranus: 30687,
  neptune: 60190,
};

export function UserLifeStyle(age, smoker, exercise, disease) {
  this.age = age;
  this.smoker = smoker;
  this.exercise = exercise;
  this.disease = disease;
}

getExpectancy.prototype.UserLifeStyle = function () {
  let expectancy = 80;
  if (smoker == "yes") {
    expectancy = expectancy - 20;
  } else if (exercise == "yes") {
    expectancy = expectancy + 10;
  } else if (disease == "yes") {
    expectancy = expectancy - 10;
  } else {
    expectancy = 80;
  }
};

export function reportAge() {
  let age = 20;
  let planetAge = [];
  for (const property in Planets) {
    console.log(
      `Your age on ${property} is: ${age * (365 / Planets[property])}.`
    );
    planetAge.push(age * (365 / Planets[property]));
  }
  console.log(planetAge);
  return planetAge;
}

reportAge();
