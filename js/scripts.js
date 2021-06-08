// Business logic

functionwordCounter(text) {
  if (text.length === 0) {
    return 0;
  }
}
function wordcounter(text) {
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(word){
    wordCount++;
  });
  return wordCount;
}