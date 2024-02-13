---
type: docs
title: "ErrorDescriptionFactory"
linkTitle: "ErrorDescriptionFactory"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Factory used to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception)
    or from arbitrary errors.  

    
---

### Description

The ErrorDescriptionFactory class provides a factory to create a serializeable [ErrorDescription](../error_description) from [ApplicationException](../application_exception) or from arbitrary errors.  

**Important points**

- Error descriptions are used to pass errors through the wire between microservices implemented in different languages. They allow to restore exceptions on the receiving side close to the original type and preserve additional information.

### Static methods

#### create
Creates a serializable ErrorDescription from an error object.

> `static` [ErrorDescription](../error_description) create(error)

- **error**: dynamic - error object
- **returns**: [ErrorDescription](../error_description) - serializeable ErrorDescription object that describes the error.

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
