---
type: docs
title: "FileError"
linkTitle: "FileError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Errors in read/write local disk operations.
---

The FileError class is used to manage errors in read/write local disk operations. 


### Constructors

#### NewFileError
Creates an error instance and assigns its values.

> NewFileError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

