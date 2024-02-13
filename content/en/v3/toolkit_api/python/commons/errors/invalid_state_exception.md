---
type: docs
title: "InvalidStateException"
linkTitle: "InvalidStateException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors related to calling operations, which require the component to be in a specific state.
    For instance: business calls when the component is not ready.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The InvalidStateException class is used to manage errors related to calling opertaions that require the component to be in a specific state. For example, business calls when the component is not reay.

### Constructors
Creates an error instance and assigns its values.

> InvalidStateException(correlation_id: Optional[str] = None, code: str = None, message: str = None)

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

