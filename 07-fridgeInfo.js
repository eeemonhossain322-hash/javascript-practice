/*
 * File Name: 07-fridgeInfo.js
 * Description: Demonstrates basic array theory. It accesses the first element using index [0], 
 *              counts total elements using .length, and finds the last element using the [length - 1] trick.
 * Concepts Used: Array, Index Access, .length property, Template Literals.
 * Author: Emon
 * Date: 04 July, 2026
 */

let fridge = ["Eggs", "Milk", "Butter"];
function fridgeInfo(){
  return `First item is: ${fridge[0]}. Total items: ${fridge.length}. Last item is: ${fridge[fridge.length -1]}`;
}
console.log(fridgeInfo());
