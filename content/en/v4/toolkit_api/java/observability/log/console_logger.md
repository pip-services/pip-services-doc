---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Logger that writes log messages to console.

---

**Extends:** [Logger](../logger)

### Description

The  ConsoleLogger class provides a logger that writes log messages to console.

Important points

- Errors are written to standard err stream and all other messages to standard out stream.

#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source


### Instance methods

#### write
Writes a log message to the logger destination.

> `public` void write([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.

### Examples

```java
{@code
  ConsoleLogger logger = new ConsoleLogger();
  logger.setLevel(LogLevel.debug);
  
  logger.error("123", ex, "Error occured: %s", ex.message);
  logger.debug("123", "Everything is OK.");
  }
```

### See also
- #### [Logger](../logger)
