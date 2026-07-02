/*
 * File Name: 03-findMax.js
 * Description: তিনটি নাম্বারের মধ্যে সবচেয়ে বড়টি খুঁজে বের করে। 
 *              এখানে Logical AND (&&) অপারেটর ব্যবহার করে একসাথে দুটি কন্ডিশন চেক করা হয়েছে।
 * Author: Emon
 * Date: 2 july, 2024
 */
function findMax(a, b, c){
  if (a >= b && a >= c){
    return a;
  } else if (b >= a && b >= c){
    return b;
  } else{
    return c;
  }
}
console.log(findMax(10, 10, 3));
