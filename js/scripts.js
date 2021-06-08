// Business logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
}
function wordcounter(text) {
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}