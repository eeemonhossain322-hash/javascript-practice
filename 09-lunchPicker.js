/*
 * File Name: 09-lunchPicker.js
 * Description: A lunch menu manager that allows adding/removing items from the start or end of an array, 
 *              picking a random lunch, and displaying the whole menu using basic array methods.
 * Concepts Used: Array (push, unshift, pop, shift, join, length), Math.random(), Template Literals, if-else.
 * Author: Emon
 * Date: 05 July, 2026
 */


let lunches =[];

function addLunchToEnd(arr, foodName){
  arr.push(foodName);
  console.log(`${foodName} added to the end of the lunch menu.`);
  return arr;
}
console.log(addLunchToEnd(lunches, "Rice"));

function addLunchToStart (arr, nameFood){
  arr.unshift(nameFood);
  console.log(`${nameFood} added to the start of the lunch menu.`);
  return arr;
}
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let food = arr.pop();
    console.log(`${food} removed from the end of the lunch menu.`);
  }
  return arr;
}
function removeFirstLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.")
  } else{
    let food = arr.shift();
    console.log(`${food} removed from the start of the lunch menu.`)
  }
  return arr;
}
function getRandomLunch(arr){
  if(arr.length === 0){
    console.log("No lunches available.");
  } else{
    let lengthArr = arr.length;
    let randomSelect = Math.floor(Math.random() * lengthArr);
    let selectedFood = arr[randomSelect];
    console.log(`Randomly selected lunch: ${selectedFood}`)
  }
}
function showLunchMenu(arr){
  if(arr.length === 0){
    console.log("The menu is empty.");
  } else{
    let joinItems = arr.join(", ");
    console.log(`Menu items: ${joinItems}`);
  }
}
