---
type: docs
title: "ApplicationException"
linkTitle: "ApplicationException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    
    Defines a base class used to define various application exceptions.

---

**Implements:** Exception

### Description

The ApplicationException class defines a base class used to define various application exceptions.

Important points

- Most languages have own definition of base exception (error) types. However, this class is implemented symmetrically in all languages supported by the PipServices toolkit and  allows to create portable implementations and support proper error propagation in microservices calls.
- Error propagation means that when a microservice implemented in one language calls a microservice(s) implemented in a different language(s), errors are returned throught the entire call chain and restored in their original (or close) type.
- Since the number of potential exception types is endless, the PipServices toolkit supports only 12 standard categories of exceptions, which are defined in [ErrorCategory](../error_category). The [ApplicationException]() class acts as a basis for these 12 standard exception types.
- Most exceptions use a free-form message that describes occured error. However, this may not be sufficient to create meaninful error descriptions. Therefore, the [ApplicationException]() class proposes an extended error definition that has more standard fields:
    - message: a human-readable error description
    - category: one of the 12 standard error categories
    - status: numeric HTTP status code for REST invocations
    - code: a unique error code, usually defined as "MY_ERROR_CODE"
    - correlation_id: a unique transaction id used to trace execution through a call chain
    - details: map with error parameters that can help to recreate meaningful error description in other languages
    - stack_trace: a stack trace
    - cause: the original error that is wrapped by this exception
- The ApplicationException class is not serializable. To pass errors through the wire it must be converted into a [ErrorDescription](../error_description) object and then restored on the receiving end into an identical exception type.

### Constructors
Creates a new instance of application exception and assigns its values.

> ApplicationException(category: str = [ErrorCategory.Unknown](../error_category), correlation_id: Optional[str] = None,
                 code: str = 'UNKNOWN', message: str = 'Unknown error')

- **category**: str - (optional) a standard error category. Default: Unknown
- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

### Fields

<span class="hide-title-link">

#### message
A human-readable error description (usually written in English).
> **message**: str

#### category
Standard error category.
> **category**: str

#### status
HTTP status code associated with this error type.
> **status**: int = 500

#### code
A unique error code
> **code**: str = 'UNKNOWN'

#### details
A map with additional details that can be used to restore error description in other languages.
> **details**: [StringValueMap](../../data/string_value_map)

#### correlation_id
A unique transaction id to trace execution throug call chain.
> **correlation_id**: Optional[str]

#### stack_trace
Stack trace of the exception.
> **stack_trace**: str

#### cause
Original error wrapped by this exception.
> **cause**: str

</span>

### Instance methods

#### get_cause_string
Gets original error wrapped by this exception as a string message.

> get_cause_string(): str

- **returns**: str - an original error message.

#### get_stack_trace_string
Gets a stack trace where this exception occured.

> get_stack_trace_string(): str 

- **returns**: str - a stack trace as a string.

#### set_cause_string
Sets original error wrapped by this exception as a string message.

> set_cause_string(value: str)

- **value**: str - an original error message.

#### set_stack_trace_string
Sets a stack trace where this exception occured.

> set_stack_trace_string(value: str)

- **value**: str - a stack trace as a string

#### with_cause
Sets a original error wrapped by this exception
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_cause(cause: Exception): [ApplicationException]()

- **cause**: Exception - original error object
- **returns**: [ApplicationException]() - this exception object

#### with_code
Sets a unique error code.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_code(code: str): [ApplicationException]()

- **code**: str - a unique error code
- **returns**: [ApplicationException]() - this exception object

#### with_correlation_id
Sets a correlation id which can be used to trace this error through a call chain.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_correlation_id(correlation_id: Optional[str]): [ApplicationException]()

- **correlation_id**: Optional[str] - a unique transaction id to trace error through call chain
- **returns**: [ApplicationException]() - this exception object

#### with_details
Sets a parameter for additional error details. 
This details can be used to restore error description in other languages.  

This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_details(key: str, value: Any): [ApplicationException]()

- **key**: str - key a details parameter name
- **value**: Any - value a details parameter name
- **returns**: [ApplicationException]() - this exception object


#### with_stack_trace
Sets a stack trace for this error.  
This method returns reference to this exception to implement Builder pattern
to chain additional calls

> with_stack_trace(stack_trace: str): [ApplicationException]()

- **stack_trace**: str - a stack trace where this error occured
- **returns**: [ApplicationException]() - this exception object


#### with_status
Sets a HTTP status code which shall be returned by REST calls. 
This method returns reference to this exception to implement Builder pattern
to chain additional calls.

> with_status(status: int): [ApplicationException]()

- **status**: int - an HTTP error code.
- **returns**: [ApplicationException]() - this exception object


#### wrap
Wraps another exception into an application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise a new ApplicationException is created and original error is set as its cause.

> wrap(cause: Any): [ApplicationException]()

- **cause**: Any - an original error object.
- **returns**: [ApplicationException]() - an original or newly created ApplicationException.

### Static methods

#### unwrap_exception!
**TODO: this method is not realized yet for this language**

Unwraps original exception through wrapped exception objects. 

Many frameworks like Seneca or restify wrap original exception.
That may result in propagating less specific errors and can hide
causes of the errors.

> `static` unwrap_exception(error: Exception): [ApplicationException]()

- **error**: Exception - an error object
- **returns**: [ApplicationException]() - an original error object

#### wrap_error
Wraps another exception into specified application exception object.

If original exception is of ApplicationException type it is returned without changes.
Otherwise the original error is set as a cause to specified ApplicationException object.

> `static` wrap_error(error: [ApplicationException](), cause: Any): [ApplicationException]()

- **error**: [ApplicationException]() - an ApplicationException object to wrap the cause
- **cause**: Any - an original error object
- **returns**: [ApplicationException]() - an original or newly created ApplicationException



### See also
- #### [ErrorCategory](../error_category)
- #### [ErrorDescription](../error_description)
