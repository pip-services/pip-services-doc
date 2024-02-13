---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
   Implements a word state object.
---

**Extends**: [GenericWordState](../../../tokenizers/generic/generic_word_state)

### Description

The ExpressionTokenizer class allows you to implement a word state object.

### Constructors
Constructs an instance of this class.

> `public` constructor()


### Fields

<span class="hide-title-link">

Supported expression keywords.
> `public readonly` **keywords**: string[] = [
   "AND", "OR", "NOT", "XOR", "LIKE", "IS", "IN", "NULL", "TRUE", "FALSE"
]

</span>


#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.