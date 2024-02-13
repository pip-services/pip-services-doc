---
type: docs
title: "AwsConnectionResolver"
linkTitle: "AwsConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-aws-node"
description: >
    Helper class used to retrieve AWS connection and credential parameters,
    validate them and compose a [AwsConnectionParams](../aws_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The AwsConnectionResolver class allows you to retrieve AWS connection and credential parameters, validate them and compose a [AwsConnectionParams](../aws_connection_params) value.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **region**: (optional) AWS region
    - **partition**: (optional) AWS partition
    - **service**: (optional) AWS service
    - **resource_type**: (optional) AWS resource type
    - **resource**: (optional) AWS resource id
    - **arn**: (optional) AWS resource ARN
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client key

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### resolve
Resolves a connection and credential parameters and generates a single
AWSConnectionParams value.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise<[AwsConnectionParams](../aws_connection_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **returns**: Promise<[AwsConnectionParams](../aws_connection_params)> - receives an AWSConnectionParams value or error.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```typescript
let config = ConfigParams.fromTuples(
    "connection.region", "us-east1",
    "connection.service", "s3",
    "connection.bucket", "mybucket",
    "credential.access_id", "XXXXXXXXXX",
    "credential.access_key", "XXXXXXXXXX"
);
     
let connectionResolver = new AwsConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
    
const connectionParams = await connectionResolver.resolve("123");
```

### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [IDiscovery](../../../config/connect/idiscovery)
