---
type: docs
title: "CommandableLambdaClient"
linkTitle: "CommandableLambdaClient"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    Abstract client that calls commandable AWS Lambda Functions.
---

**Extends:** [LambdaClient](../lambda_client)

### Description

Commandable services are generated automatically for [ICommandable](../../../rpc/commands/icommandable).
Each command is exposed as an action determined by the "cmd" parameter.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **region**: (optional) AWS region
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key
- **options**:
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 10 sec)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages.
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements.
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials.

### Constructors
Creates a new instance of this client.

> `public` constructor(name: string)

- **name**: string - a service name.

### Instance methods

#### callCommand
Calls a remote action in AWS Lambda function.
The name of the action is added as "cmd" parameter
to the action parameters. 

> `public` <T> T callCommand(Class<T> type, String cmd, IContext context, Map<String, Object> params)

- **cmd**: string - action name
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **params**: any - command parameters.
- **returns**: Promise\<any\> - action result.



### Examples


### See also
- #### [LambdaFunction](../../containers/lambda_function)
- #### [CommandableLambdaClient](../../clients/commandable_lambda_client)
