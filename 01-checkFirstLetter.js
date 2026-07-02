function similarWord(first, second){
  let firstWord = first[0];
  let secondWord = second[0];
  if (firstWord === secondWord){
    return `Wow, ${first} and ${second} both start with the same letter!`
  }
  else{
    return "No match.";
  }
}
console.log(similarWord("Rahim", "Rajshahi"));
