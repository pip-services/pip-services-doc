---
type: docs
title: "TestLambdaClient"
linkTitle: "TestLambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    AWS Lambda client used for automated testing.
---

**Extends:** [LambdaClient](../../clients/lambda_client)

### Description
The TestLambdaClient class allows you to create an AWS Lambda client that can be used for automated testing.

### Constructors
Creates an instance of this class.  

> `public` constructor()

### Instance methods

#### call
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` call(cmd: string, context: [IContext](../../../components/context/icontext), params: any = {}): Promise\<any\>

- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.

#### callOneWay
Calls an AWS Lambda Function action asynchronously without waiting for the response.

> `public` callOneWay(cmd: string, context: [IContext](../../../components/context/icontext), params: any = {}): Promise\<any\>

- **cmd**: string - action name to be called.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - (optional) action parameters.
- **returns**: Promise\<any\> - action result.
