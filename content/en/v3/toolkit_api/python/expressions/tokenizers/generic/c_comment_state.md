---
type: docs
title: "CCommentState"
linkTitle: "CCommentState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

### Description

The CCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.


### Instance methods

#### next_token
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
