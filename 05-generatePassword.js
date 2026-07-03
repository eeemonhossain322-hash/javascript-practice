/*
 * File Name: 05-generatePassword.js
 * Description: ইউজারের দেওয়া নামটি উল্টে দিয়ে তার সাথে '@secret' যুক্ত করে একটি সিক্রেট পাসওয়ার্ড তৈরি করে।
 * Concepts Used: Function, String Methods (.split(), .reverse(), .join()), Template Literals.
 * Author: Emon
 * Date: 3 july, 2026
 */


function generatePassword(pass){
  let splitPass = pass.split("");
  let reversePass = splitPass.reverse();
  let joinPass = reversePass.join("");
  return `${joinPass}@secret`;
  
}
console.log(generatePassword("Emon"));
