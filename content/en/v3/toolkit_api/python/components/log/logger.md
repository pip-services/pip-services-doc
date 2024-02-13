---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Logger that captures and formats log messages.
    
---

**Implements:** [ILogger](../ilogger), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The Logger class allows you to create a logger that captures and formats logs messages.

Important points

- Child classes take the captured messages and write them to their specific destinations.

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:
 
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _level
Maximum log level to capture
> **_level**: [LogLevel](../log_level) = LogLevel.Info


#### _source
source (context) name
> **_source**: str

</span>


### Instance methods

#### _compose_error
Composes an human-readable error description

> _compose_error(error: Exception): str

- **error**: Exception - an error to format.
- **returns**: str - a human-redable error description.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### debug
Logs high-level debug information for troubleshooting.

> debug(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### error
Logs recoverable application error.

> error(correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) messages that caused the process to crash.

> fatal(correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### _format_and_write
Formats the log message and writes it to the logger destination.

> _format_and_write(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str], *args: Any, **kwargs: Any)

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### get_level
Gets the maximum log level. Messages with higher log level are filtered out.

> get_level(): [LogLevel](../log_level)

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### get_source
Gets the source (context) name.

> get_source(): str

- **returns**: str -  the source (context) name.


#### info
Logs an important information message

> info(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### log
Logs a message at a specified log level.

> log(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str], *args: Any, **kwargs: Any)

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### set_level
Set the maximum log level.

> set_level(level: [LogLevel](../log_level))

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs a low-level debug information for troubleshooting.

> trace(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.

#### warn
Logs a warning that may or may not have a negative impact.

> warn(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.

### Abstract methods

#### _write
Writes a log message to the logger destination.

> `abstractmethod` _write(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str]):

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.


### See also
- #### [ILogger](../ilogger)
