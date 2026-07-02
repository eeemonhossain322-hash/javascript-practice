/*
 * File Name: 01-checkFirstLetter.js
 * Description: দুটি শব্দের প্রথম অক্ষর চেক করে। যদি দুটো শব্দ একই অক্ষর দিয়ে শুরু হয়, 
 *              তাহলে একটি মেসেজ রিটার্ন করে, নাহলে "No match." রিটার্ন করে।
 * Author: Emon 
 * Date: 6.2.26
 */


function similarWord(first, second){
  let firstWord = first[0];
  let secondWord = second[0];
  if (firstWord === secondWord){
    return `Wow, ${first} and ${second} both start with the same letter!`;
  }
  else{
    return "No match.";
  }
}
console.log(similarWord("Rahim", "Rajshahi"));
