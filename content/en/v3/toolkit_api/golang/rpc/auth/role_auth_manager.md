---
type: docs
title: "RoleAuthManager"
linkTitle: "RoleAuthManager"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rpc-gox"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthManager class provides methods to check on a user's roles.

### Methods

#### UserInRoles
Checks on the roles a user has been assigned.
Throws [UnauthorizedError](../../../commons/errors/unauthorized_error) exception if not authorized or not owner.

> (c [*RoleAuthManager]()) UserInRoles(roles []string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **roles**: []string - roles list.
- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns roles handler.

#### UserInRole
Check if the role is assigned to the user.  
Throws [UnauthorizedError](../../../commons/errors/unauthorized_error) exception if not authorized or not owner.

> (c [*RoleAuthManager]()) UserInRole(role string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **role**: string - the user role.
- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns role handler.


#### Admin
Check if the user has admin role.  
Throws [UnauthorizedError](../../../commons/errors/unauthorized_error) exception if not authorized or not owner.

> (c [*RoleAuthManager]()) Admin() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns admin handler.
