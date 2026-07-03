/*
 * File Name: 06-atmMachine.js
 * Description: A simple ATM logic that validates a 4-digit PIN, checks 
 *              if the requested amount is within the maximum limit ($200), 
 *              and returns a success message if all conditions are met.
 * Concepts Used: Function, Strict Inequality (!==), Comparison Operator (>), If-Else Chain, Template Literals.
 * Author: Emon
 * Date: 04 June, 2026
 */


function atmMachine(pin, money){
  if(pin !== 1234){
    return "Wrong PIN!" 
  } else if(money > 200){
    return "Insufficient balance";
  } else{
    return `Withdraw successful. Take your cash: ${money}`;
  }
}
console.log(atmMachine(1234, 100)); 
