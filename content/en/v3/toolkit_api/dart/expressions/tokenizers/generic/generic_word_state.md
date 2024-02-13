---
type: docs
title: "GenericWordState"
linkTitle: "GenericWordState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    A WordState returns a word from a scanner. 
---

**Implements**: [IWordState](../../iword_state)

### Description

The GenericWordState class allows you to create a WordState that returns a word from a scanner.

**Important points**

- Like other states, a tokenizer transfers the job of reading to this state, depending on an initial character.
- This state determines which characters may appear as a second or later character in a word. These are typically different sets of characters; in particular, it is typical for digits to appear as parts of a word, but not as the initial character of a word.
- By default, the following characters may appear in a word (The method *setWordChars()* allows customizing this):
<blockquote><pre>
From     To
 'a',    'z'
 'A',    'Z'
 '0',    '9'
   
</pre></blockquote>
As well as: minus sign, underscore, and apostrophe.

### Constructors
Constructs a word state with a default idea of what characters
are admissible inside a word (as described in the class comment).

> GenericWordState()

### Instance methods


#### clearWordChars
Clears definitions of word chars.

`@override`
> void clearWordChars()

#### nextToken
Ignores a word (such as blanks and tabs), and returns the tokenizer's next token.

`@override`
> [Token?](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer?](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.

#### setWordChars
Establishes characters in the given range as valid characters for part of a word after the first character. 

Note that the tokenizer must determine which characters are valid as the beginning character of a word.

`@override`
> void setWordChars(int fromSymbol, int toSymbol, bool enable)

- **fromSymbol**: int - first character index of the interval.
- **toSymbol**: int - last character index of the interval.
- **enable**: bool - *true* if this state should ignore characters in the given range.
