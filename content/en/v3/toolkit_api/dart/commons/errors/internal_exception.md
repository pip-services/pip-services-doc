---
type: docs
title: "InternalException"
linkTitle: "InternalException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors caused by programming mistakes.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InternalException class is used to manage errors caused by programming mistakes.

### Constructors
Creates an error instance and assigns its values.

> InternalException([String? correlation_id, String? code, String? message])

- **correlation_id**: String? - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String? - (optional) unique error code. Default: "UNKNOWN"
- **message**: String? - (optional) human-readable description of the error.

