/*
 * File Name: 10-maskCheck.js
 * Description: Checks mask availability from inventory array. Takes maskName as 
 *              parameter and returns "Available" if found in availableMasks array, 
 *              otherwise returns "Out of stock".
 * Concepts Used: Array, Array.includes(), Function, Conditional Statement, Return.
 * Author: Emon
 * Date: 04 July, 2026
 */

let availableMasks = ["N95", "Surgical", "Cloth"];
function checkMask(maskName){
  if(availableMasks.includes(maskName)){
    return "Available";
  } else{
    return   "Out of stock";
  }
}
console.log(checkMask("Cloth"));
