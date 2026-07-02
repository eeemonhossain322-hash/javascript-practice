/*
 * File Name: 02-printStars.js
 * Description: একটি নির্দিষ্ট সংখ্যা অনুযায়ী স্টার (*) প্রিন্ট করে এবং মোট কয়টা স্টার সেটা ব্র্যাকেটে দেখায়।
 * Author: Emon
 * Date: 7.2.26
 */


function printStars(num){
  let repeatNum = "*".repeat(num);
  return `${repeatNum} (${num} Stars)`
}
console.log(printStars(5));
