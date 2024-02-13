---
type: docs
title: "AboutOperations"
linkTitle: "AboutOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Class used to obtain information about running services.
---

**Inherits:** [RestOperations](../rest_operations)

### Description

The AboutOperations class is used to obtain information about running services.

### Instance methods

#### About
Gets information from a service.
Sends a JSON string with information about the service.

> `public` Task AboutAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user)
- **request**: HttpRequest - HTTP request.
- **response**: HttpResponse - HTTP response.
- **user**: ClaimsPrincipal - to identify current user.

#### GetAboutOperation
Gets the service's information.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> GetAboutOperation()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> - about method


#### SetReferences
Sets the references of the service.

> `public new` void SetReferences([IReferences](../../../commons/refer/ireferences references)

- **references**: [IReferences](../../../commons/refer/ireferences) - service's references.
