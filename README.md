The purpose of this project is to create a website that takes a users age and a few questions about their lifestyle, converts their age to the solar age on other planets, and return those ages to the users.

**This project must meet the following requirements:**

1. Business logic is thoroughly tested with Jest
2. Each spec was committed before writing its corresponding code.
3. Project utilizes ES6 features including classes and template literals.
4. Dependencies are managed with npm.
5. Webpack is used to lint, bundle, and process code.
6. Project is in a polished, portfolio-quality state.
7. Required functionality was in place by the deadline.
8. Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

The first thing this project will need to do is create an object that contains key-value pairs of planets and how many days (compared to earth) are in a year on said planet.
**Planet Year Length**
|Planet|Days|
|------|----|
|Mercury|88|
|Venus|225|
|Earth|365|
|Mars|687|
|Jupiter|4333|
|Saturn|10759|
|Uranus|30687|
|Neptune|60190|

The next thing to do will be to come up with a set of rules that define life expectancy. There isn't a lot of information on how to accurately calculate that number, so I will just use some general rules based on users lifestyles.

**Rules for Life Expectancy**
_We'll say the average human lifespan is 80 years_

1. Does user smoke? => if so - 20 years from lifespan
2. Does user exercise? => if so + 10 years to lifespan
3. Does user have family history of heart disease/cancer? => if so - 10 years from lifespan
