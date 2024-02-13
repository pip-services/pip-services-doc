---
type: docs
title: "PostgresConnectionResolver"
linkTitle: "PostgresConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    Helper class that resolves PostgreSQL connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)


### Description

The PostgresConnectionResolver class allows you to create a PostgresSQL connection and credential parameters resolver that validates these parameters and generates a connection URI.

Important points

- It is able to process multiple connections to PostgreSQL cluster nodes.

#### Configuration parameters
**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **database**: database name
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: username
- **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the connection component.

> PostgresConnectionResolver()

### Fields

<span class="hide-title-link">

#### _connection_resolver
The connection resolver
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credential_resolver
The credential resolver
> **_credential_resolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves PostgreSQL config from connection and credential parameters.

> resolve(correlation_id: Optional[str]): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: Any - resolved connection config or raised error.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
