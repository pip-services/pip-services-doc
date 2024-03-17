---
type: docs
title: "ErrorCategory"
linkTitle: "ErrorCategory"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Defines the 12 standard error categories supported by the PipServices toolkit.
    
---

### Description

The ErrorCategory class defines the 12 standard error categories supported by the PipServices toolkit.

### Fields

<span class="hide-title-link">

#### Unknown
Unknown or unexpected errors.
> `public final static` String **Unknown** = "Unknown"

#### Internal
Internal errors caused by programming mistakes.
> `public final static` String **Internal** = "Internal"

#### Misconfiguration	
Errors related to mistakes in user-defined configurations.
> `public final static` String **Misconfiguration** = "Misconfiguration"
	
#### InvalidState
Errors caused by incorrect object state.. 
For example: business calls when the component is not ready.
> `public final static` String **InvalidState** = "InvalidState"
	
#### NoResponse	
Errors caused by remote calls timeouted and not returning results.
It allows to clearly separate communication related problems
from other application errors.
> `public final  static` String **NoResponse** = "NoResponse"

#### FailedInvocation	
Errors caused by remote calls failed due to unidenfied reasons.
> `public final static` String **FailedInvocation** = "FailedInvocation"

#### FileError
Errors in read/write local disk operations.
> `public final static` String **FileError** = "FileError"

#### BadRequest
Errors due to incorrectly specified invocation parameters.
For example: missing or incorrect parameters.
> `public final static` String **BadRequest** = "BadRequest"
	
#### Unauthorized
Access errors caused by missing user identity (authentication error)
or incorrect security permissions (authorization error).
> `public final static` String **Unauthorized** = "Unauthorized"

#### NotFound
Errors caused by attempts to access missing objects.
> `public final static` String **NotFound** = "NotFound"
	
#### Conflict
Errors raised by conflicts between object versions that were
posted by the user and those that are stored on the server.
> `public final static` String **Conflict** = "Conflict"	
	
#### Unsupported	
Errors caused by calls to unsupported or not yet implemented functionality.
> `public final static` String **Unsupported** = "Unsupported"

</span>
