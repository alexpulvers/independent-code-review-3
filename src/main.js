import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";

export function lifeExpectancy(age, smoker, exercise, disease) {
  let expectancy = 80;

  if (smoker == true) {
    expectancy -= 20;
  }
  if (exercise == true) {
    expectancy += 10;
  }
  if (disease == true) {
    expectancy -= 10;
  }
  if (age > expectancy) {
    console.log(
      `You have lived ${
        age - expectancy
      } years longer than expected!! Congratulations!`
    );
  } else if (age < expectancy) {
    console.log(`You are ${expectancy - age} years away from death.`);
  }
}
// const Planets = {
//   mercury: 88,
//   venus: 225,
//   earth: 365,
//   mars: 687,
//   jupiter: 4333,
//   saturn: 10759,
//   uranus: 30687,
//   neptune: 60190,
// };

$(document).submit(function () {
  $("#get-info").submit(function (event) {
    event.preventDefault();
    let smoker = $("#smoker").val();
    let exercise = $("#exercise").val();
    let disease = $("#disease").val();
    let age = $("#user-age").val();
    //reportAge(age);
    //lifeExpectancy(age, smoker, exercise, disease);
    console.log(smoker + exercise + disease + age);
  });
});

// function reportAge(age) {
//   for (const property in Planets) {
//     console.log(
//       `Your age on ${property} is: ${age * (365 / Planets[property])}.`
//     );
//   }
//}
