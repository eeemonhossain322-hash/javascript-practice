* File Name: 10-golfScore.js
 * Description: A Golf Score Translator. It takes the par (average strokes) and actual strokes made, 
 *              and returns a specific nickname based on how far above or below the par the player scored.
 * Concepts Used: Function, if-else if-else chain, Comparison Operators (===, <=, >=), Arithmetic Operators (+, -).
 * Author: Emon
 * Date: 04 July, 2026
 */
  
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes <= par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else{
    return "Go Home!";
  }
}
console.log(golfScore(4, 1));  // "Hole-in-one!"
console.log(golfScore(4, 2));  // "Eagle"
console.log(golfScore(4, 3));  // "Birdie"
console.log(golfScore(4, 4));  // "Par"
console.log(golfScore(4, 5));  // "Bogey"
console.log(golfScore(4, 6));  // "Double Bogey"
console.log(golfScore(4, 7));  // "Go Home!"
