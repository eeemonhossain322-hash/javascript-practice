/**
 * Description: A Wildlife Animal Tracker. Contains functions to get, add, update, and delete 
 * properties of animal objects. Demonstrates object property access using both 
 * dot notation and bracket notation.
 * Concepts Used: Objects, Arrow Functions, Dot Notation, Bracket Notation, Property Assignment,
 * delete operator, hasOwnProperty() method, console.log().
 * Author: Emon
 * Date: 12 July, 2026
 */

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) =>{
  return animal[propertyName];
}
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
