import $ from "jquery";
import "./styles.css";
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

export function UserLifeStyle(age, smoker, exercise, disease, expectancy) {
  this.age = age;
  this.smoker = smoker;
  this.exercise = exercise;
  this.disease = disease;
  this.expectancy = expectancy;
}
UserLifeStyle.prototype.getExpectancy = function () {
  let expectancy = 80;
  if (this.smoker == "yes") {
    expectancy = expectancy - 20;
  } else if (this.exercise == "yes") {
    expectancy = expectancy + 10;
  } else if (this.disease == "yes") {
    expectancy = expectancy - 10;
  } else {
    expectancy = 80;
  }
  for (const property in Planets) {
    if (this.age * (365 / Planets[property]) >= expectancy) {
      $("#results").append(
        `You have lived ${
          this.age * (365 / Planets[property]) - expectancy
        } years longer than expected on ${property}!! Congratulations!` + "<br>"
      );
    } else if (this.age * (365 / Planets[property]) < expectancy) {
      $("#results").append(
        `You are ${
          expectancy - this.age * (365 / Planets[property])
        } Earth years away from death on ${property}.` + "<br>"
      );
    }
  }
};

export function reportAge(age) {
  let planetAge = [];
  $("#results").html(" ");
  for (const property in Planets) {
    $("#results").append(
      `Your age on ${property} is: ${age * (365 / Planets[property])}.` + "<br>"
    );
    planetAge.push(age * (365 / Planets[property]));
  }
  return planetAge;
}

$(document).ready(function () {
  $("#get-info").submit(function (event) {
    event.preventDefault();
    let smoker = $("#smoker").val();
    let exercise = $("#exercise").val();
    let disease = $("#disease").val();
    let age = $("#user-age").val();
    reportAge(age);
    let newUser = new UserLifeStyle(age, smoker, exercise, disease);
    console.log(smoker, exercise, disease, age);
    newUser.getExpectancy();
    console.log(newUser);
    $("#user-age").val(" ");
  });
  $(".container").hide();
  $("#toggle").click(function () {
    $(".container").toggle("slow", function () {});
  });
});
