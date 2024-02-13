---
type: docs
title: "TestCommandableGrpcClient"
linkTitle: "TestCommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-grpc-nodex"
description: > 
    GRPC client for automated testing.

---

**Extends:** [CommandableGrpcClient](../../clients/commandable_grpc_client)


### Description

The TestCommandableGrpcClient class allows you to create a commandable GRPC client for automated testing.

### Constructors
Creates a new instance of the TestCommandableGrpcClient class.

> `public` constructor(name: string)

- **name**: string - a service name. 


### Instance methods

#### callCommand
Calls a remote method via GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + "." + name.

> `public` callCommand(name: string, correlationId: string, params: any): Promise\<any\>

- **name**:string - a name of the command to call. 
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **params**: any - command parameters.
- **returns**: Promise\<any\> - the received result.

