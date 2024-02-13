---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> `public` constructor(correlationId: string, code: string, message: string, line: number = 0, column: number = 0)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable error message.
- **line**: number - line number
- **column**: number - column number
