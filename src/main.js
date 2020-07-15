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

function reportAge(age) {
  for (const property in Planets) {
    console.log(
      `Your age on ${property} is: ${age * (365 / Planets[property])}.`
    );
  }
}
