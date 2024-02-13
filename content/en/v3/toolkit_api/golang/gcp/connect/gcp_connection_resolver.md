---
type: docs
title: "GcpConnectionResolver"
linkTitle: "GcpConnectionResolver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-gcp-gox"
description: >
    Helper class used to retrieve Google connection and credential parameters,
    validate them and compose a [GcpConnectionParams](../gcp_connection_params) value.
 
---

### Description

Helper class to retrieve Google connection and credential parameters,
validate them and compose a [GcpConnectionParams](../gcp_connection_params) value.


#### Configuration parameters

- **connections**:                   
     - **uri**:           full connection uri with specific app and function name
     - **protocol**:      connection protocol
     - **project_id**:    is your Google Cloud Platform project ID
     - **region**:        is the region where your function is deployed
     - **function_name**: is the name of the HTTP function you deployed
- **credentials**:    
    - **account**: the service account name
    - **auth_token**: Google-generated ID token or null if using custom auth

#### References
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Constructors

#### NewGcpConnectionResolver
Creates new instance of GcpConnectionResolver

> NewGcpConnectionResolver() [*GcpConnectionResolver]()

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> **connectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### credentialResolver
Credential resolver.
> **credentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*GcpConnectionResolver]()) Configure(ctx context.Context, config *cconf.ConfigParams)

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Resolve
Resolves connection and credential parameters and generates a single
[GcpConnectionParams](../gcp_connection_params) value.

> (c [*GcpConnectionResolver]()) Resolve(correlationId string) ([GcpConnectionParams](../gcp_connection_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: ([GcpConnectionParams](../gcp_connection_params), error) - receives an GcpConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> (c [*GcpConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```go
config := config.NewConfigParamsFromTuples(
	"connection.uri", "http://east-my_test_project.cloudfunctions.net/myfunction",
	"connection.protocol", "http",
	"connection.region", "east",
	"connection.function", "myfunction",
	"connection.project_id", "my_test_project",
	"credential.auth_token", "1234",
)
ctx := context.Background()
connectionResolver := connect.NewGcpConnectionResolver()
connectionResolver.Configure(ctx, config)
connectionResolver.SetReferences(ctx, references)
connectionParams, _ := connectionResolver.Resolve("123")
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
