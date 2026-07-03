/*
 * File Name: 04-isSpecial.js
 * Description: একটি স্ট্রিংয়ের ভেতরে নির্দিষ্ট ক্যারেক্টার ('@') আছে কি না তা চেক করে।
 * Concepts Used: Function, String Method (.includes()), Conditional Statement (if-else), Boolean (true/false).
 * Author: Emon
 * Date: 3 july, 2024
 */
function isSpecial (find){
  if (find.includes("@")){
    return true;
  } else {
    return false;
  }
}
console.log(isSpecial("eeemon@hossain"));
