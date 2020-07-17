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

function lifeExpectancy(age, smoker, exercise, disease) {
  for (const property in Planets) {
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
  }
}

export function reportAge(age) {
  for (const property in Planets) {
    console.log(
      `Your age on ${property} is: ${age * (365 / Planets[property])}.`
    );
    age = age * (365 / Planets[property]);
    return age;
  }
}
