### **Describe:** _wordCounter()_

  ### Test: _"It should return 1 if a passage has just one word."_
  ### const text = _"hello";_
  ### wordCounter(text);
  ### Expected Output: _1_

  <br >

  ### Test: _"It should return 2 if a passage has two words."_
  ### Code:
  ### const text = _"hello there";_
  ### wordCounter(text);
  ### Expected Output: _2_

  <br >

  ### Test: _"It should return 0 for an empty string."_
  ### Code: _wordCounter("");_
  ### Expected Output: _0_

  <br >

  ### Test: _"It should return 0 for a string that is only spaces."_
  ### Code: _wordCounter("            ");_
  ### Expected Output: _0_

  <br >

  ### Test: _"It should not count numbers as words."_
  ### Code: _wordCounter("hi there 77 19");_
  ### Expected Output: _2_

<br >

### **Describe:** _numberOfOccurrencesInText()_
### Test: _"It should return 0 occurrences of a word for an empty string."_
### Code:
### const text = _"";_
### const word = _"red";_
### numberOfOccurrencesInText(word, text);
### Expected Output: _0_

<br >

### Test: _"It should return 1 occurrence of a word when the word and the text are the same."_
### Code:
### const text = _"red";_
### const word = _"red";_
### numberOfOccurrencesInText(word, text);
### Expected Output: _1_

<br >

### Test: _"It should return 0 occurrences of a word when the word and the text are different."_
### Code:
### const text = _"red";_
### const word = _"blue";_
### numberOfOccurrencesInText(word, text);
### Expected Output: _0_

<br >

### Test: _"It should return the number of occurrences of a word."_
### Code:
### const text = _"red blue red red red green";_
### const word = _"red";_
### numberOfOccurrencesInText(word, text);
### Expected Output: _4_

<br >

### Test: _"It should return 0 occurrences of a word for an empty string."_
### Code:
### const text = _"";_
### const word = +"red";_
### numberOfOccurrencesInText(word, text);
### Expected Output: _0_
