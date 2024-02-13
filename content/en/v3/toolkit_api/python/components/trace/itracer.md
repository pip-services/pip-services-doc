---
type: docs
title: "ITracer"
linkTitle: "ITracer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer component that capture operation traces.

### Instance methods

#### begin_trace
Begings recording an operation trace

> begin_trace(correlation_id: Optional[str], component: str, operation: str): [TraceTiming](../trace_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error.

> failure(correlation_id: Optional[str], component: str, operation: str, error: Exception,
duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration

> trace(correlation_id: Optional[str], component: str, operation: str, duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **duration**: float - execution duration in milliseconds.
