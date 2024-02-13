---
type: docs
title: "SyntaxError"
linkTitle: "SyntaxError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
description: > 
    Exception that can be thrown by ExpressionParser.
---

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../../parsers/expression_parser) class.

### Constructors

#### NewSyntaxError
Exception that can be thrown by Expression Parser.

> NewSyntaxError(correlationId, code, message string, line, column int) [*ApplicationError](../../../../commons/errors/application_error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable error message.
- **line**: int - line number
- **column**: int - column number
