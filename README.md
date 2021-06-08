### Describe: _wordCounter()_

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

