---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Logger that captures and formats log messages.
    
---

**Inherits**: [ILogger](../ilogger), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The Logger class allows you to create a logger that captures and formats logs messages.

**Important points**

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
> `protected` **_level**: [LogLevel](../log_level) = [LogLevel.Info](../log_level/#info)


#### _source
source (context) name
> `protected` **_source**: string = null

</span>



### Instance methods

#### ComposeError
Composes a human-readable error description

> `protected` string ComposeError(Exception error)

- **error**: Exception - error to format.
- **returns**: string - human-redable error description.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs recoverable application error.

> `public` void Error(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs recoverable application error.

> `public` void Error(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### FormatAndWrite
Formats the log message and writes it to the logger destination.

> `protected` void FormatAndWrite([LogLevel](../log_level) level, string correlationId, Exception error, string message, object[] args)

- **level**: [LogLevel](../log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(string correlationId, string message, params object[] args): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(string correlationId, Exception error, string message = null, params object[] args): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> `public` void Log([LogLevel](../log_level) level, string correlationId, Exception error, string message, params object[] args)

- **level**: [LogLevel](../log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

### Abstract methods

#### Write
Writes a log message to the logger destination.

> `protected abstract` void Write([LogLevel](../log_level) level, string correlationId, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.



### See also
- #### [ILogger](../ilogger)
