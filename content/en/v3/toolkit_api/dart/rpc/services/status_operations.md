---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Handles status requests for REST operations.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The StatusOperations class allows you to handle status requests for REST operations.  


### Instance methods

#### getStatusOperation
Gets the status of the operation.

> Function(shelf.Request req) getStatusOperation()

- **returns**: Function(shelf.Request req) - status operation method


#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### status
Handles status requests.

> FutureOr\<shelf.Response\> status(shelf.Request req)

- **req**: shelf.Request - HTTP request context
- **returns**: FutureOr\<shelf.Response\> - HTTP response context
